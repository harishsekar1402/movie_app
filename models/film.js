import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("movieModel", movieSchema);
