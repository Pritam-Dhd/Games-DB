import express from "express";
import { fetchAndSaveGenres, getGenres } from "../Api/CRUD/Genre.js";

const router = express.Router();

router.post("/add-genres", async (req, res) => {
  try {
    // Call the fetchAndSaveGenres function to fetch and save genres
    await fetchAndSaveGenres();
    res.send("Genres added successfully");
  } catch (error) {
    console.error("Error adding genres:", error.message);
    res.send("Error adding genres");
  }
});

router.get("/get-genres", async (req, res) => {
  try {
    const genres = await getGenres();
    res.send(genres);
  } catch (error) {
    console.error("Error getting Genres:", error.message);
    res.send("Error getting Genres");
  }
});

export default router;
