import express from "express"; // Import the Express framework
import mongoose from "mongoose"; // Import Mongoose for MongoDB connectivity
import AdminJSExpress from "@adminjs/express"; // Import AdminJS Express module
import adminJs from "./Admin.js"; // Import your AdminJS configuration
import cors from "cors"
import gamesRoutes from "./Routes/Game.js";
import platformRoutes from "./Routes/Platform.js";
import publisherRoutes from "./Routes/Publisher.js";
import genreRoutes from "./Routes/Genre.js";
import storesRoute from "./Routes/Store.js";

// Create an Express application instance
const app = express();

app.use(cors());
// Build and use a router to handle AdminJS routes.
const router = AdminJSExpress.buildRouter(adminJs); // Create an AdminJS router using your configuration
app.use(adminJs.options.rootPath, router); // Use the AdminJS router with the specified root path

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Use routes for the games
app.use("/", gamesRoutes,platformRoutes,genreRoutes,publisherRoutes,storesRoute);

// Run the server.
const run = async () => {
  // Connect to MongoDB
  await mongoose.connect("mongodb://mongodb:27017/GamesDB");

  // Start the Express server on port 5000 and log a message once it's listening
  await app.listen(5000, () =>
    console.log(`Example app listening on port 5000`)
  );
};

run(); // Call the run function to start the server
