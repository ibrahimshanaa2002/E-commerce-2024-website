const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const ProductModel = mongoose.Schema(
  {
    title: { type: String},
    desc: { type: String },
    img: { type: String },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    newprice: { type: Number },
    oldprice: { type: Number },
    sex: {
      type: String,
      enum: ["Men", "Women", "Kids"],
    },
    totalQuantitySold: { type: Number, default: 0 }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductModel);
module.exports = Product;
