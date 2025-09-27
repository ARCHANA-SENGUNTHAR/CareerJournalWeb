// backend/routes/journalRoutes.js
import express from "express";
import multer from "multer";
import { createJournal, getUserJournals } from "../controllers/journalController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// ✅ Post with controller
router.post("/create", upload.single("file"), createJournal);

// ✅ Fetch user’s journals
router.get("/user/:userId", getUserJournals);

export default router;
