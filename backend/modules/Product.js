const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const defaultSeasons = ["winter", "summer", "spring", "fall"];

const seasonEnum = {
  values: defaultSeasons,
  message: `Invalid season. Must be one of: ${defaultSeasons.join(", ")}.`,
};

const ProductModel = mongoose.Schema(
  {
    title: { type: String },
    desc: { type: String },
    img: { type: String },
    categories: { type: String },
    size: { type: Array },
    season: {
      type: String,
      enum: seasonEnum,
      default: () => defaultSeasons[0],
      required: true,
    },
    color: { type: Array },
    style: { type: String },
    newprice: { type: Number },
    oldprice: { type: Number },
    quantity: { type: Number },
    sex: {
      type: String,
      enum: ["Men", "Women", "Kids"],
      required: true,
    },
    totalQuantitySold: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductModel);
module.exports = Product;
