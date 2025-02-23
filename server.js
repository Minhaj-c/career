import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import User from "./models/User.js";
import fs from "fs";
import { recommendations } from "./models/recommendations.js";
import { weeklyContent } from "./models/week.js";
import Post from "./models/Community.js";
import { jobRecommendations, defaultRecommendations } from './models/jobRecommendations.js';

dotenv.config();
connectDB();



const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadFolder = path.join(__dirname, "uploads");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

app.get("/", (req, res) => {
  res.render("signup");
});

app.use((req, res, next) => {
  res.locals.error = undefined;
  next();
});

app.use("/api/auth", authRoutes);

app.get("/login", (req, res) => {
  res.render("login", { error: undefined });
});

app.get("/welcome/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.render("welcome", { username: user.username, userId: user._id });
  } catch (error) {
    console.error(
      "Error fetching user or rendering welcome page:",
      error.message
    );
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Route for question 1
app.get("/questions/:userId", (req, res) => {
  const userId = req.params.userId;
  res.render("question1", { userId });
});

// Handle question 1 response
app.post("/question2", (req, res) => {
  const { userId, qualification } = req.body;
  res.render("question2", { userId, qualification });
});

// Route for question 2
app.get("/question2", (req, res) => {
  const { userId, qualification } = req.query;
  res.render("question2", { userId, qualification });
});

// Handle question 2 response
app.post("/question3", (req, res) => {
  const { userId, qualification, skills } = req.body;
  res.render("question3", { userId, qualification, skills });
});

// Route for question 3
app.get("/question3", (req, res) => {
  const { userId, qualification, skills } = req.query;
  res.render("question3", { userId, qualification, skills });
});

// Handle question 3 response
app.post("/question4", (req, res) => {
  const { userId, qualification, skills, interests } = req.body;
  res.render("question4", { userId, qualification, skills, interests });
});

// Route for question 4
app.get("/question4", (req, res) => {
  const { userId, qualification, skills, interests } = req.query;
  res.render("question4", { userId, qualification, skills, interests });
});

// Handle question 4 response
app.post("/api/auth/update-responses", async (req, res) => {
  const { userId, qualification, skills, interests, hobbies } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        qualification,
        skills,
        interests,
        hobbies,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(400).json({ message: "User not found" });
    }

    res.redirect(`/home/${updatedUser._id}`);
  } catch (error) {
    console.error("Error updating user responses:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/home/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.render("home", {
      username: user.username,
      userId: user._id,
      profilePic: user.profilePic,
      hasSelectedJobs: user.hasSelectedJobs,
    });
  } catch (error) {
    console.error("Error fetching user or rendering home page:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/recommendations/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const userRecommendations = new Set(); // Use a Set to avoid duplicates
    const { qualification, skills, interests, hobbies } = user;

    // If the user selects "Nothing" for all categories, show all recommendations
    if (
      qualification === "Nothing" &&
      skills.includes("Nothing") &&
      interests.includes("Nothing") &&
      hobbies.includes("Nothing")
    ) {
      for (const qual in recommendations) {
        for (const skill in recommendations[qual]) {
          for (const interest in recommendations[qual][skill]) {
            for (const hobby in recommendations[qual][skill][interest]) {
              recommendations[qual][skill][interest][hobby].forEach((rec) => {
                userRecommendations.add(JSON.stringify(rec));
              });
            }
          }
        }
      }
    } else {
      // Handle multiple selections for skills, interests, and hobbies
      skills.forEach((skill) => {
        if (skill !== "Nothing") {
          interests.forEach((interest) => {
            if (interest !== "Nothing") {
              hobbies.forEach((hobby) => {
                if (hobby !== "Nothing") {
                  if (
                    recommendations[qualification] &&
                    recommendations[qualification][skill] &&
                    recommendations[qualification][skill][interest] &&
                    recommendations[qualification][skill][interest][hobby]
                  ) {
                    recommendations[qualification][skill][interest][
                      hobby
                    ].forEach((rec) => {
                      userRecommendations.add(JSON.stringify(rec));
                    });
                  }
                } else {
                  // Recommend based on skills and interests if hobbies are "Nothing"
                  if (
                    recommendations[qualification] &&
                    recommendations[qualification][skill] &&
                    recommendations[qualification][skill][interest]
                  ) {
                    for (const hobby in recommendations[qualification][skill][
                      interest
                    ]) {
                      recommendations[qualification][skill][interest][
                        hobby
                      ].forEach((rec) => {
                        userRecommendations.add(JSON.stringify(rec));
                      });
                    }
                  }
                }
              });
            } else {
              // Recommend based on skills and hobbies if interests are "Nothing"
              hobbies.forEach((hobby) => {
                if (
                  recommendations[qualification] &&
                  recommendations[qualification][skill]
                ) {
                  for (const interest in recommendations[qualification][
                    skill
                  ]) {
                    if (
                      recommendations[qualification][skill][interest][hobby]
                    ) {
                      recommendations[qualification][skill][interest][
                        hobby
                      ].forEach((rec) => {
                        userRecommendations.add(JSON.stringify(rec));
                      });
                    }
                  }
                }
              });
            }
          });
        } else {
          // Recommend based on qualification only if skills are "Nothing"
          if (recommendations[qualification]) {
            for (const skill in recommendations[qualification]) {
              for (const interest in recommendations[qualification][skill]) {
                for (const hobby in recommendations[qualification][skill][
                  interest
                ]) {
                  recommendations[qualification][skill][interest][
                    hobby
                  ].forEach((rec) => {
                    userRecommendations.add(JSON.stringify(rec));
                  });
                }
              }
            }
          }
        }
      });
    }

    const uniqueRecommendations = Array.from(userRecommendations).map((rec) =>
      JSON.parse(rec)
    );

    res.render("recommendations", {
      user,
      userRecommendations: uniqueRecommendations,
    });
  } catch (error) {
    console.error(
      "Error fetching user or rendering recommendations page:",
      error.message
    );
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/job-details/:job", async (req, res) => {
  const job = decodeURIComponent(req.params.job);
  const userId = req.query.userId;
  let jobDetails = null;

  // Find the job details in your recommendations object
  for (const level in recommendations) {
    for (const skill in recommendations[level]) {
      for (const field in recommendations[level][skill]) {
        for (const interest in recommendations[level][skill][field]) {
          const recommendation = recommendations[level][skill][field][interest];
          recommendation.forEach((rec) => {
            if (rec.jobs.includes(job)) {
              jobDetails = rec;
            }
          });
        }
      }
    }
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.render("job-details", { job, jobDetails, user });
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/job-full-details/:job", async (req, res) => {
  const job = decodeURIComponent(req.params.job);
  const userId = req.query.userId;
  let fullJobDetails = null;

  for (const level in recommendations) {
    for (const skill in recommendations[level]) {
      for (const field in recommendations[level][skill]) {
        for (const interest in recommendations[level][skill][field]) {
          const recommendation = recommendations[level][skill][field][interest];
          recommendation.forEach((rec) => {
            if (rec.details && rec.details[job]) {
              fullJobDetails = rec.details[job];
            }
          });
        }
      }
    }
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res.render("job-full-details", { job, fullJobDetails, user });
  } catch (error) {
    console.error("Error fetching job details:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/course-details/:course", (req, res) => {
  const course = decodeURIComponent(req.params.course);
  let courseDetails = null;
  let previousJob = null;

  // Extract the previous job from the referrer (if available)
  if (req.headers.referer && req.headers.referer.includes("/job-details/")) {
    previousJob = req.headers.referer.split("/job-details/")[1];
  }

  // Find the course details in your recommendations object
  for (const level in recommendations) {
    for (const skill in recommendations[level]) {
      for (const field in recommendations[level][skill]) {
        for (const interest in recommendations[level][skill][field]) {
          const recommendation = recommendations[level][skill][field][interest];
          recommendation.forEach((rec) => {
            if (rec.courses.includes(course)) {
              courseDetails = {
                description: `Description for ${course}`, // Replace with actual description
                modules: [`Module 1 of ${course}`, `Module 2 of ${course}`], // Replace with actual modules
                jobs: rec.jobs,
              };
            }
          });
        }
      }
    }
  }

  res.render("course-details", { course, courseDetails, previousJob });
});

app.get("/dashboard/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    const users = await User.find(); // Fetch all users
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.render("dashboard", {
      username: user.username,
      userId: user._id,
      email: user.email,
      profilePic: user.profilePic,
      users,
    });
  } catch (error) {
    console.error("Error fetching user or rendering dashboard:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/skills-qualifications/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.render("skills-qualifications", {
      user, // Pass the user object to the template
      username: user.username,
      userId: user._id,
      qualification: user.qualification,
      skills: user.skills,
      interests: user.interests,
      hobbies: user.hobbies,
    });
  } catch (error) {
    console.error(
      "Error fetching user or rendering skills-qualifications page:",
      error.message
    );
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/edit-skills-qualifications/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.render("edit-skills-qualifications", { user });
  } catch (error) {
    console.error(
      "Error fetching user or rendering edit-skills-qualifications page:",
      error.message
    );
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.post("/update-skills-qualifications", async (req, res) => {
  const { userId, skills, interests, hobbies } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        skills: Array.isArray(skills) ? skills : [skills],
        interests: Array.isArray(interests) ? interests : [interests],
        hobbies: Array.isArray(hobbies) ? hobbies : [hobbies],
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(400).json({ message: "User not found" });
    }

    res.redirect(`/skills-qualifications/${updatedUser._id}`);
  } catch (error) {
    console.error(
      "Error updating user skills, interests, and hobbies:",
      error.message
    );
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/edit-profile/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.render("edit-profile", {
      userId: user._id,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error(
      "Error fetching user or rendering edit profile page:",
      error.message
    );
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Add these routes to your server.js file

// Handle roadmap generation
// Handle roadmap generation
app.post("/roadmap", async (req, res) => {
  const { userId, selectedJobs } = req.body;
  const jobsArray = Array.isArray(selectedJobs) ? selectedJobs : [selectedJobs];

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      {
        selectedJobs: jobsArray,
        hasSelectedJobs: true,
      },
      { new: true }
    );

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Get details for the first selected job
    const selectedJob = jobsArray[0]; // We'll use the first job for the roadmap
    const jobContent = weeklyContent[selectedJob];

    if (!jobContent) {
      return res.status(400).json({ message: "Job path not found" });
    }

    // Initialize progress for this job if not exists
    if (!user.weeklyProgress.has(selectedJob)) {
      user.weeklyProgress.set(selectedJob, {
        completedWeeks: [],
        unlockedWeeks: [1],
        quizScores: new Map(),
      });
      await user.save();
    }

    const progress = user.weeklyProgress.get(selectedJob);

    // Render the roadmap template with all required variables
    res.render("roadmap", {
      username: user.username,
      userId: user._id,
      roadmap: { job: selectedJob }, // Pass job as an object property
      weeks: jobContent.weeks,
      user: {
        completedWeeks: progress.completedWeeks,
        unlockedWeeks: progress.unlockedWeeks,
        quizScores: progress.quizScores,
      },
      totalWeeks: jobContent.weeks.length,
    });
  } catch (error) {
    console.error("Error generating roadmap:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).render("login", { error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).render("login", { error: "Invalid credentials" });
    }

    // Check if user has selected jobs
    if (user.hasSelectedJobs && user.selectedJobs.length > 0) {
      // Redirect to roadmap page
      return res.redirect(`/roadmap/${user._id}`);
    } else if (user.qualification) {
      // If user has qualification but no jobs, go to home
      return res.redirect(`/home/${user._id}`);
    } else {
      // If user hasn't completed questions, redirect to questions
      return res.redirect(`/questions/${user._id}`);
    }
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).render("login", { error: "Server error occurred" });
  }
});
// Route to display the roadmap page directly from a link (GET request)
app.get("/roadmap/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const job = user.selectedJobs[0];
    const jobContent = weeklyContent[job]; // Get weekly content for the selected job

    if (!jobContent) {
      return res.status(400).json({ message: "Job path not found" });
    }

    // Initialize progress if not exists
    if (!user.weeklyProgress.has(job)) {
      user.weeklyProgress.set(job, {
        completedWeeks: [],
        unlockedWeeks: [1],
        quizScores: new Map(),
      });
      await user.save();
    }

    const progress = user.weeklyProgress.get(job);

    res.render("roadmap", {
      username: user.username,
      userId: user._id,
      roadmap: { job },
      weeks: jobContent.weeks, // Pass weeks data to the template
      user: {
        completedWeeks: progress.completedWeeks,
        unlockedWeeks: progress.unlockedWeeks,
      },
      totalWeeks: jobContent.weeks.length,
    });
  } catch (error) {
    console.error("Error fetching roadmap:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.post("/api/progress/quiz", async (req, res) => {
  const { userId, week, score, job } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const progress = user.weeklyProgress.get(job) || {
      completedWeeks: [],
      unlockedWeeks: [1],
      quizScores: new Map(),
    };

    progress.quizScores.set(week.toString(), score);

    if (score >= 70) {
      if (!progress.completedWeeks.includes(week)) {
        progress.completedWeeks.push(week);
      }
      if (!progress.unlockedWeeks.includes(week + 1)) {
        progress.unlockedWeeks.push(week + 1);
      }
    }

    user.weeklyProgress.set(job, progress);
    await user.save();

    res.json({ success: true, progress });
  } catch (error) {
    console.error("Error saving quiz progress:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/your-interests/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!user.selectedJobs || user.selectedJobs.length === 0) {
      return res.redirect(`/recommendations/${userId}`);
    }

    const selectedJobDetails = [];
    for (const job of user.selectedJobs) {
      let jobDetails = null;

      // Find job details in recommendations object
      for (const level in recommendations) {
        for (const skill in recommendations[level]) {
          for (const field in recommendations[level][skill]) {
            for (const interest in recommendations[level][skill][field]) {
              const recommendation =
                recommendations[level][skill][field][interest];
              recommendation.forEach((rec) => {
                if (rec.jobs.includes(job)) {
                  jobDetails = {
                    job: job,
                    courses: rec.courses,
                    salary:
                      rec.details && rec.details[job]
                        ? rec.details[job].salary
                        : null,
                    workingHours:
                      rec.details && rec.details[job]
                        ? rec.details[job].workingHours
                        : null,
                    description:
                      rec.details && rec.details[job]
                        ? rec.details[job].description
                        : null,
                  };
                }
              });
            }
          }
        }
      }

      if (jobDetails) {
        selectedJobDetails.push(jobDetails);
      }
    }

    res.render("your-interests", {
      selectedJobDetails,
      username: user.username,
      userId: user._id,
    });
  } catch (error) {
    console.error("Error fetching selected jobs:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/progress/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Get the selected job and its roadmap
    const selectedJob = user.selectedJobs[0];
    const jobContent = weeklyContent[selectedJob];

    if (!jobContent) {
      return res.status(400).json({ message: "Job path not found" });
    }

    // Get the user's progress for the selected job
    const progress = user.weeklyProgress.get(selectedJob) || {
      completedWeeks: [],
      unlockedWeeks: [1],
      quizScores: new Map(),
    };

    // Calculate progress percentage
    const totalWeeks = jobContent.weeks.length;
    const completedWeeks = progress.completedWeeks.length;
    const progressPercentage = ((completedWeeks / totalWeeks) * 100).toFixed(2);

    // Render the progress page
    res.render("progress", {
      username: user.username,
      userId: user._id,
      selectedJob,
      completedWeeks,
      totalWeeks,
      progressPercentage,
      weeks: jobContent.weeks,
      progress,
    });
  } catch (error) {
    console.error("Error fetching progress:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.post("/api/roadmap/drop-out", async (req, res) => {
  const { userId, job } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Remove the selected job and reset progress
    user.selectedJobs = [];
    user.hasSelectedJobs = false;
    user.weeklyProgress.delete(job); // Remove progress for the dropped job

    await user.save();

    res.json({ success: true });
  } catch (error) {
    console.error("Error dropping out:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/community/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await Post.find().populate("userId", "username profilePic");
    const user = await User.findById(userId);
    res.render("community", {
      userId,
      posts,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    res.status(500).send("Error loading community page.");
  }
});

// Create a New Post
app.post("/create-post/:userId", async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.params.userId;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      username: user.username,
      content,
    });
    await newPost.save();
    res.redirect(`/community/${userId}`);
  } catch (error) {
    res.status(500).send("Error creating post.");
  }
});

// Add a Comment to a Post
app.post("/add-comment/:postId/:userId", async (req, res) => {
  try {
    const { comment } = req.body;
    const postId = req.params.postId;
    const userId = req.params.userId;
    const user = await User.findById(userId);
    const post = await Post.findById(postId);
    post.comments.push({
      userId,
      username: user.username,
      content: comment,
    });
    await post.save();
    res.redirect(`/community/${userId}`);
  } catch (error) {
    res.status(500).send("Error adding comment.");
  }
});

app.get("/api/skill-recommendations/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
      const user = await User.findById(userId);
      if (!user || !user.selectedJobs || user.selectedJobs.length === 0) {
          return res.status(400).json({ message: "No selected jobs found" });
      }

      const selectedJob = user.selectedJobs[0];
      
      // Get recommendations for the selected job, or provide default recommendations
      const recommendations = jobRecommendations[selectedJob] || defaultRecommendations;

      res.json(recommendations);
  } catch (error) {
      console.error("Error fetching skill recommendations:", error.message);
      res.status(500).json({ message: "Server error" });
  }
});

app.get("/improve-skills/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
      const user = await User.findById(userId);
      if (!user) {
          return res.status(400).json({ message: "User not found" });
      }

      const selectedJob = user.selectedJobs[0] || "No job selected";

      res.render("improve-skills", {
          username: user.username,
          userId: user._id,
          selectedJob: selectedJob
      });
  } catch (error) {
      console.error("Error fetching user:", error.message);
      res.status(500).json({ message: "Server error", error: error.message });
  }
});


// Handle logout
app.get("/logout", (req, res) => {
  // Clear session or any authentication tokens
  res.redirect("/login");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
