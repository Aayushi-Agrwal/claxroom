import { Schema, model, models } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide a username"],
    unique: false,
  },
  metacritic: {
    type: String,
    required: [true, "Please provide an email"],
    unique: false,
  },
  plot: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

const Movie = models.Movie || model("Movie", movieSchema);
export default Movie;
