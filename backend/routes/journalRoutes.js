// routes/journalRoutes.js
import express from "express";
import multer from "multer";
import Journal from "../models/Journal.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// POST /api/journals/create
router.post("/create", upload.single("file"), async (req, res) => {
  const { title, content, userId } = req.body;
  const file = req.file;

  const newJournal = new Journal({
    title,
    content,
    userId,
    media: file ? file.filename : null,
  });

  await newJournal.save();
  res.json({ message: "Journal created" });
});

// GET /api/journals/user/:userId
router.get("/user/:userId", async (req, res) => {
  const journals = await Journal.find({ userId: req.params.userId }).sort({ createdAt: -1 });
  res.json(journals);
});

export default router;
