// Import necessary libraries/modules
import express from "express"; // Import the Express framework
import mongoose from "mongoose"; // Import Mongoose for MongoDB connectivity
import AdminJSExpress from "@adminjs/express"; // Import AdminJS Express module
import adminJs from './Admin.js'; // Import your AdminJS configuration
import { fetchAndSavePlatforms } from './Api/Add/Platforms.js';
import { fetchAndSaveGenres } from './Api/Add/Genre.js';
import { fetchAndSavePublishers } from "./Api/Add/Publisher.js";

// Create an Express application instance
const app = express();

// Build and use a router to handle AdminJS routes.
const router = AdminJSExpress.buildRouter(adminJs); // Create an AdminJS router using your configuration
app.use(adminJs.options.rootPath, router); // Use the AdminJS router with the specified root path

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.post("/add-platforms",async(req,res)=>{
    try {
        // Call the fetchAndSavePlatforms function to fetch and save platforms
        await fetchAndSavePlatforms();
        res.send("Platforms added successfully");
    } catch (error) {
        console.error('Error adding platforms:', error.message);
        res.send("Error adding platforms");
    }
})

app.post("/add-genres",async(req,res)=>{
    try {
        // Call the fetchAndSaveGenres function to fetch and save genres
        await fetchAndSaveGenres();
        res.send("Genres added successfully");
    } catch (error) {
        console.error('Error adding genres:', error.message);
        res.send("Error adding genres");
    }
})

app.post("/add-publishers",async(req,res)=>{
    try {
        await fetchAndSavePublishers();
        res.send("Publishers added successfully");
    } catch (error) {
        console.error('Error adding Publishers:', error.message);
        res.send("Error adding Publishers");
    }
})

// Run the server.
const run = async () => {
    // Connect to MongoDB
    await mongoose.connect("mongodb://mongodb:27017/GamesDB");
    
    // Start the Express server on port 5000 and log a message once it's listening
    await app.listen(5000, () => console.log(`Example app listening on port 5000`));
};

run(); // Call the run function to start the server
