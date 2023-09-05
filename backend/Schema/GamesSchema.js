import mongoose from "mongoose";

const gamesSchema = new mongoose.Schema({
  name: { type: String },
  platform_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "platforms",
    },
  ],
  released_date: { type: Date },
  image: { type: String },
});

const Game = mongoose.model("games", gamesSchema);

export default Game;
