import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
  name: { type: String },
  domain:{ type: String },
});

const Store = mongoose.model("stores", storeSchema);

export default Store;
