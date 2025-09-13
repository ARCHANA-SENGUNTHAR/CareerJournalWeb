import fetch from "node-fetch";
import https from "https";
import dotenv from "dotenv";

dotenv.config();

const agent = new https.Agent({
  rejectUnauthorized: false, // ignore SSL errors
});

export async function wakeSpace() {
  const SPACE_URL = process.env.HF_SPACE_URL.endsWith("/")
    ? process.env.HF_SPACE_URL
    : process.env.HF_SPACE_URL + "/";

  try {
    console.log("Waking up Hugging Face Space...");
    const response = await fetch(SPACE_URL, { agent });

    if (response.ok) {
      console.log("Space is awake ✅");
      return true;
    } else {
      console.log("Failed to wake Space, status:", response.status);
      return false;
    }
  } catch (err) {
    console.error("Error waking Space:", err.message);
    return false;
  }
}
