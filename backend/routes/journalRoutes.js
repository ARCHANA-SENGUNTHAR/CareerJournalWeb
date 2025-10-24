// backend/routes/journalRoutes.js
import express from "express";
import multer from "multer";
import { createJournal, getUserJournals, getJournalById } from "../controllers/journalController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// 1️⃣ Specific routes first
router.post("/create", upload.single("file"), createJournal);
router.get("/user/:userId", getUserJournals);

// 2️⃣ Generic route last
router.get("/:id", getJournalById);

export default router;