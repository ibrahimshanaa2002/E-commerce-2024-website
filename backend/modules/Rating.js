const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const RatingModel = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    body: { type: String, required: true },
    rating: { type: Number, default: 0, required: true },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model("Rating", RatingModel);
module.exports = Rating;
