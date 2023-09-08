import express from "express";
import { fetchAndSaveGame, getGames } from "../Api/CRUD/Game.js";

const router = express.Router();

router.post("/add-game/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await fetchAndSaveGame({ id });
    res.send("Game added successfully");
  } catch (error) {
    console.error("Error adding Game:", error.message);
    res.send("Error adding Game");
  }
});

router.get("/get-games", async (req, res) => {
  try {
    const games = await getGames();
    res.send(games);
  } catch (error) {
    console.error("Error getting Games:", error.message);
    res.send("Error getting Games");
  }
});

export default router;