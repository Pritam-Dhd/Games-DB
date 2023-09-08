import express from "express";
import { fetchAndSaveStores, getStores } from "../Api/CRUD/Store.js";

const router = express.Router();

router.post("/add-stores", async (req, res) => {
  try {
    await fetchAndSaveStores();
    res.send("Stores added successfully");
  } catch (error) {
    console.error("Error adding Stores:", error.message);
    res.send("Error adding Stores");
  }
});

router.get("/get-stores", async (req, res) => {
  try {
    const stores = await getStores();
    res.send(stores);
  } catch (error) {
    console.error("Error getting Stores:", error.message);
    res.send("Error getting Stores");
  }
});

export default router;
