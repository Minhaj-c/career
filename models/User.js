import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String },
    qualification: {
      type: String,  // Qualification selected by user
    },
    skills: {
      type: [String],  // Array of skills selected by user
    },
    interests: {
      type: [String],  // Array of interests (optional)
    },
    hobbies: {
      type: [String],
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
