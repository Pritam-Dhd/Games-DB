// Import necessary libraries/modules
import AdminJS from "adminjs"; // Import AdminJS library
import * as AdminJSMongoose from '@adminjs/mongoose'; // Import AdminJS Mongoose adapter
import Platform from "./Schema/PlatformSchema.js"; // Import the Mongoose Platform model from Schema.js
import Game  from "./Schema/GamesSchema.js";
import Genre from "./Schema/GenreSchema.js";

// Register the AdminJS Mongoose adapter to work with Mongoose models
AdminJS.registerAdapter(AdminJSMongoose);

// Configure AdminJS with basic settings
const adminJs = new AdminJS({
  resources: [
    {
      resource: Platform, // Register the Platform Mongoose model as a resource for AdminJS
    },
    {
      resource: Game,
    },
    {
      resource:Genre
    }
  ],
  rootPath: "/admin", // Specify the root path for the AdminJS dashboard
});

// Export the configured AdminJS instance to use in other parts of your application
export default adminJs;
