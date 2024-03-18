// Order.js

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user who placed the order
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], // References to the products ordered
  subtotal: { type: Number, required: true },
  total: { type: Number, required: true },
  phoneNumber : {type : Number ,required:true},
  streetAddress : {type : String , required : true },
  state : {type :String , required:true},
  zip : {type : Number,required:true},
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
