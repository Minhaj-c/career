import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    url: { type: String }, // Optional: Link to register or learn more
});

export default mongoose.model("Event", eventSchema);