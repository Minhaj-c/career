import express from "express";
import { registerUser } from "../controllers/authController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/signup", upload.single("profilePic"), registerUser);

export default router;
