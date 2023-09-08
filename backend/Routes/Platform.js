import express from "express";
import { fetchAndSavePlatforms, getPlatforms } from "../Api/CRUD/Platforms.js";

const router = express.Router();

router.post("/add-platforms", async (req, res) => {
  try {
    // Call the fetchAndSavePlatforms function to fetch and save platforms
    await fetchAndSavePlatforms();
    res.send("Platforms added successfully");
  } catch (error) {
    console.error("Error adding platforms:", error.message);
    res.send("Error adding platforms");
  }
});

router.get("/get-platforms", async (req, res) => {
  try {
    const platform = await getPlatforms();
    res.send(platform);
  } catch (error) {
    console.error("Error getting Platform:", error.message);
    res.send("Error getting Platform");
  }
});

export default router;
