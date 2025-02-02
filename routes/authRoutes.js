import express from "express";
import bcrypt from "bcryptjs";
import multer from "multer";
import User from "../models/User.js";

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Handle user signup
router.post("/signup", upload.single("profilePic"), async (req, res) => {
  const { username, email, password } = req.body;
  const profilePic = req.file ? req.file.filename : null;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profilePic
    });

    await newUser.save();

    res.redirect(`/welcome/${newUser._id}`);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Handle user login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.redirect(`/home/${user._id}`);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Handle user responses
router.post("/update-responses", async (req, res) => {
  const { userId, qualification, skills, interests } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        qualification,
        skills,
        interests
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(400).json({ message: "User not found" });
    }

    res.redirect(`/home/${updatedUser._id}`);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
