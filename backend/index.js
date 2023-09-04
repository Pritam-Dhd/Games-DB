// Import necessary libraries/modules
import express from "express"; // Import the Express framework
import mongoose from "mongoose"; // Import Mongoose for MongoDB connectivity
import AdminJSExpress from "@adminjs/express"; // Import AdminJS Express module
import adminJs from './Admin.js'; // Import your AdminJS configuration

// Create an Express application instance
const app = express();

// Build and use a router to handle AdminJS routes.
const router = AdminJSExpress.buildRouter(adminJs); // Create an AdminJS router using your configuration
app.use(adminJs.options.rootPath, router); // Use the AdminJS router with the specified root path

app.get("/",(req,res)=>{
    res.send("Hello World")
})

// Run the server.
const run = async () => {
    // Connect to MongoDB
    await mongoose.connect("mongodb://mongodb:27017/GamesDB");
    
    // Start the Express server on port 5000 and log a message once it's listening
    await app.listen(5000, () => console.log(`Example app listening on port 5000`));
};

run(); // Call the run function to start the server
