const mongoose = require("mongoose");

// Define schema for productts
const ProductModel = mongoose.Schema(
  {
    title: { type: String },
    desc: { type: String },
    img: { type: String },
    size: { type: Array },
    color: { type: Array },
    brand: { type: String },
    newprice: { type: Number },
    oldprice: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductModel);

// Define schema for user's cart
const CartItemSchema = mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, default: 1 },
  size: { type: String }, // Assuming user selects only one size
  color: { type: String }, // Assuming user selects only one color
});

const CartSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Assuming you have a User model
  items: [CartItemSchema],
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = { Product, Cart };
