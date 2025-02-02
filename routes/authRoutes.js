import express from "express";
import bcrypt from "bcryptjs";
import multer from "multer";  // Import multer for file upload
import User from "../models/User.js";  // Assuming you have a User model

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  }
});

const upload = multer({ storage });  // Initialize multer with storage configuration

// Handle user signup
// ...existing code...

// Handle user signup
router.post("/signup", upload.single("profilePic"), async (req, res) => {
    const { username, email, password } = req.body;
    const profilePic = req.file ? req.file.filename : null; // Check if profilePic is provided
  
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
        profilePic,  // Store profile picture if uploaded
      });
  
      await newUser.save();
  
      // Redirect to the welcome page after signup
      res.redirect(`/welcome/${newUser._id}`);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: "Server error" });
    }
  });
  
  // ...existing code...
  

// Handle user responses (qualification, skills, interests)
router.post("/update-responses", async (req, res) => {
    const { userId, qualification, skills, interests } = req.body;
  
    try {
      // Find user by ID and update their responses
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          qualification,
          skills,
          interests,
        },
        { new: true }  // Return the updated document
      );
  
      if (!updatedUser) {
        return res.status(400).json({ message: "User not found" });
      }
  
      // Redirect to a success page or send a response
      res.status(200).json({ message: "Responses updated successfully", updatedUser });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: "Server error" });
    }
});
  
// Render welcome page with user data
router.get("/welcome/:userId", async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId); // Fetch user from database
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Render welcome page and pass user data (e.g., username)
        res.render("welcome", { username: user.username, userId: user._id });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
