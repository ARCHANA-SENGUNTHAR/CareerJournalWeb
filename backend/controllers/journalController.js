// controllers/journalController.js
import Journal from "../models/Journal.js";

export const createJournal = async (req, res) => {
  const { title, content, userId } = req.body;
  try {
    const journal = await Journal.create({ title, content, user: userId });
    res.status(201).json(journal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getUserJournals = async (req, res) => {
  try {
    const journals = await Journal.find({ user: req.params.userId }).sort({ createdAt: -1 });
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
