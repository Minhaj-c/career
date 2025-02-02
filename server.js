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

    const userRecommendations = [];
    const { qualification, skills, interests, hobbies } = user;

    skills.forEach((skill) => {
      interests.forEach((interest) => {
        hobbies.forEach((hobby) => {
          if (
            recommendations[qualification] &&
            recommendations[qualification][skill] &&
            recommendations[qualification][skill][interest] &&
            recommendations[qualification][skill][interest][hobby]
          ) {
            userRecommendations.push({
              courses:
                recommendations[qualification][skill][interest][hobby].courses,
              jobs:
                recommendations[qualification][skill][interest][hobby].jobs,
            });
          }
        });
      });
    });

    res.render("recommendations", { user, userRecommendations });
  } catch (error) {
    console.error(
      "Error fetching user or rendering recommendations page:",
      error.message
    );
    res.status(500).json({ message: "Server error", error: error.message });
  }
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
      username: user.username,
      userId: user._id,
      qualification: user.qualification,
      skills: user.skills,
    });
  } catch (error) {
    console.error(
      "Error fetching user or rendering skills-qualifications page:",
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
