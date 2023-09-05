// Import the Mongoose library for MongoDB connectivity
import mongoose from "mongoose";

const platformSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// Create a Mongoose model named 'platform' for the 'platform' collection, using the defined schema
const Platform = mongoose.model("platforms", platformSchema);

// Export the 'User' model to make it available for use in other parts of your application
export default Platform;
