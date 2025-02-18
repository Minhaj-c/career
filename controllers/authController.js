// authController.js
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const profilePic = req.file ? req.file.filename : null;

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profilePic,
    });

    const savedUser = await newUser.save();
    
    // Redirect to welcome page with user ID instead of login
    res.redirect(`/welcome/${savedUser._id}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).render('login', { error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).render('login', { error: 'Invalid credentials' });
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
    res.status(500).render('login', { error: 'Server error occurred' });
  }
};