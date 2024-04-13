import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a your name"],
    unique: false,
  },
  image: {
    type: String,
    required: false,
    unique: false,
  },
  community: {
    type: Array,
    required: [true, "Please provide a password"],
  },
});

const Movie = models.Movie || model("Movie", userSchema);
export default Movie;
