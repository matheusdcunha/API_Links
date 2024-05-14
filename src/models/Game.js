import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    link: { type: String, required: true },
    gender: { type: String },
    coop_online: { type: Boolean, required: true },
    last_mod: { type: String, required: true },
  },
  { versionKey: false }
);

const game = mongoose.model("games", gameSchema);

export default game;
