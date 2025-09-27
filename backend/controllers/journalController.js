// controllers/journalController.js
import Journal from "../models/Journal.js";
import User from "../models/User.js";  // make sure you have User model

// ✅ UPDATED createJournal
export const createJournal = async (req, res) => {
  try {
    const { title, content, userId, aiProbability } = req.body;
    const file = req.file ? req.file.filename : null;

    if (!title || !content || !userId) {
      return res.status(400).json({ error: "All fields required" });
    }

    // AI check
    if (aiProbability && aiProbability > 70) {
      return res.status(400).json({ error: "Content flagged as AI-generated" });
    }

    const newJournal = new Journal({
      title,
      content,
      userId,
      media: file,
    });

    await newJournal.save();

    res.status(201).json(newJournal);
  } catch (err) {
    console.error("Error creating journal:", err);
    res.status(500).json({ error: err.message });
  }
};


// Keep the rest of your functions as they are
export const getUserJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ userId: req.params.userId })
      .sort({ createdAt: -1 });
    res.json(journals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const updateJournal = async (req, res) => {
  try {
    const journal = await Journal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(journal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteJournal = async (req, res) => {
  try {
    await Journal.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
