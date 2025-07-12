// models/Journal.js
import mongoose from "mongoose";

const journalSchema = new mongoose.Schema({
  title: String,
  content: String,
  media: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const Journal = mongoose.model("Journal", journalSchema);
export default Journal;
