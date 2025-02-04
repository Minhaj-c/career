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

app.use("/api/auth", authRoutes);

app.get("/login", (req, res) => {
  res.render("login");
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
                    recommendations[qualification][skill][interest][hobby].forEach((rec) => {
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
                    for (const hobby in recommendations[qualification][skill][interest]) {
                      recommendations[qualification][skill][interest][hobby].forEach((rec) => {
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
                  for (const interest in recommendations[qualification][skill]) {
                    if (recommendations[qualification][skill][interest][hobby]) {
                      recommendations[qualification][skill][interest][hobby].forEach((rec) => {
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
                for (const hobby in recommendations[qualification][skill][interest]) {
                  recommendations[qualification][skill][interest][hobby].forEach((rec) => {
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

    res.render("recommendations", { user, userRecommendations: uniqueRecommendations });
  } catch (error) {
    console.error("Error fetching user or rendering recommendations page:", error.message);
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

app.get('/job-full-details/:job', async (req, res) => {
  const job = decodeURIComponent(req.params.job);
  const userId = req.query.userId;
  let fullJobDetails = null;

  for (const level in recommendations) {
    for (const skill in recommendations[level]) {
      for (const field in recommendations[level][skill]) {
        for (const interest in recommendations[level][skill][field]) {
          const recommendation = recommendations[level][skill][field][interest];
          recommendation.forEach(rec => {
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

    res.render('job-full-details', { job, fullJobDetails, user });
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

// Handle logout
app.get("/logout", (req, res) => {
  // Clear session or any authentication tokens
  res.redirect("/login");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
