const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const defaultSeasons = ["winter", "summer", "spring", "fall"];


const seasonEnum = {
  values: defaultSeasons,
  message: `Invalid season. Must be one of: ${defaultSeasons.join(', ')}.`
};



const ProductModel = mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: String, required: true },
    size: { type: Array, required: true },
    season: { type: String, enum: seasonEnum, default: () => defaultSeasons[0] }, 
    color: { type: Array, required: true },
    style: { type: String }, 
    newprice: { type: Number, required: true },
    oldprice: { type: Number, required: true },
    sex: {
      type: String,
      enum: ["Men", "Women", "Kids"],
      required: true
    },
    totalQuantitySold: { type: Number, default: 0 }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductModel);
module.exports = Product;
