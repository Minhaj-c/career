import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import User from "./models/User.js";
import fs from "fs";

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
    console.error('Error fetching user or rendering welcome page:', error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/questions/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.render("questions", { userId: user._id });
  } catch (error) {
    console.error('Error fetching user or rendering questions page:', error.message);
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
    res.render("home", { username: user.username, userId: user._id, profilePic: user.profilePic });
  } catch (error) {
    console.error('Error fetching user or rendering home page:', error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

app.get("/dashboard/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.render("dashboard", { username: user.username, userId: user._id, email: user.email, profilePic: user.profilePic });
  } catch (error) {
    console.error('Error fetching user or rendering dashboard:', error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
