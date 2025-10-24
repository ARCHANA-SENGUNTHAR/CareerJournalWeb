// backend/controllers/journalController.js
import axios from "axios";
import mongoose from "mongoose";
import Journal from "../models/Journal.js";

// Create Journal with AI check
export const createJournal = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const file = req.file ? req.file.filename : null;

    if (!title || !content || !userId) {
      return res.status(400).json({ error: "All fields required" });
    }

    // Step 1: Call Python AI Detection Service
    const aiRes = await axios.post("http://localhost:8000/detect", { text: content });
    const aiProbability = aiRes.data?.ai_probability;

    if (aiProbability === undefined) {
      return res.status(500).json({ error: "AI detection service failed" });
    }

    // Step 2: Block content if AI probability > 30%
    if (aiProbability > 30) {
      return res.status(400).json({
        error: `⚠️ AI content detected (${aiProbability.toFixed(1)}%). Please rewrite in your own words.`,
      });
    }

    // Step 3: Save to DB if human-written
    const newJournal = new Journal({
      title,
      content,
      userId,
      media: file,
      aiProbability,
    });

    await newJournal.save();
    res.status(201).json(newJournal);

  } catch (err) {
    // Internal log only
    // console.error("Journal operation failed:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Fetch all journals for a user
export const getUserJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(journals);
  } catch (err) {
    // console.error("Fetching journals failed:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Fetch single journal by ID
export const getJournalById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Journal ID" });
    }

    const journal = await Journal.findById(id);
    if (!journal) return res.status(404).json({ error: "Journal not found" });

    res.json(journal);
  } catch (err) {
    // console.error("Fetching journal failed:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Update journal
export const updateJournal = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Journal ID" });
    }

    const journal = await Journal.findByIdAndUpdate(id, req.body, { new: true });
    res.json(journal);
  } catch (err) {
    // console.error("Updating journal failed:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete journal
export const deleteJournal = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Journal ID" });
    }

    await Journal.findByIdAndDelete(id);
    res.json({ msg: "Deleted Successfully" });
  } catch (err) {
    // console.error("Deleting journal failed:", err);
    res.status(500).json({ error: "Server error" });
  }
};
