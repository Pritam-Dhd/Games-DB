import express from "express";
import {
  fetchAndSavePublishers,
  getPublishers,
} from "../Api/CRUD/Publisher.js";

const router = express.Router();

router.post("/add-publishers", async (req, res) => {
  try {
    await fetchAndSavePublishers();
    res.send("Publishers added successfully");
  } catch (error) {
    console.error("Error adding Publishers:", error.message);
    res.send("Error adding Publishers");
  }
});

router.get("/get-publishers", async (req, res) => {
  try {
    const publishers = await getPublishers();
    res.send(publishers);
  } catch (error) {
    console.error("Error getting Publishers:", error.message);
    res.send("Error getting Publishers");
  }
});

export default router;
