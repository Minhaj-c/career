import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String },
    qualification: {
      type: String,
    },
    skills: {
      type: [String],
    },
    interests: {
      type: [String],
    },
    hobbies: {
      type: [String],
    },
    selectedJobs: {
      type: [String], // Array to store selected jobs
      default: []
    },
    hasSelectedJobs: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);