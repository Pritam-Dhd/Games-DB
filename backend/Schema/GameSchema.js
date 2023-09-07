import mongoose from "mongoose";

const gamesSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String},
  platforms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "platforms",
    },
  ],
  publishers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "publishers",
    },
  ],
  rating: { type: Number },
  genres: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "genres",
    },
  ],
  stores: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "stores",
    },
  ],
  released_date: { type: Date },
  image: { type: String },
});

const Game = mongoose.model("games", gamesSchema);

export default Game;
