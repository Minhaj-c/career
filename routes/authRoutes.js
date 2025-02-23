// authRoutes.js
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import multer from 'multer';
import path from 'path';


const router = express.Router();

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Routes
router.post('/signup', upload.single('profilePic'), registerUser);
router.post('/login', loginUser);

export default router;