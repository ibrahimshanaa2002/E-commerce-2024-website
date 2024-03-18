const asyncHandler = require("express-async-handler");
const Order = require("../modules/order");
const Cart = require("../modules/Cart");

const createOrder = asyncHandler(async (req, res) => {
  try {
    // Extract user ID from the authenticated user
    const userId = req.user._id;

    // Retrieve products from the user's cart
    const cartItems = await Cart.find({ userId });

    // Create an order object
    const order = new Order({
      user: userId, // Updated to match the schema field
      products: cartItems.map(item => ({
        productId: item.productId,
        quantity: item.quantity
      })),
      subtotal: req.body.subtotal,
      total: req.body.total,
      phoneNumber: req.body.phoneNumber, // Added phoneNumber field
      streetAddress: req.body.streetAddress, // Added streetAddress field
      state: req.body.state, // Added state field
      zip: req.body.zip // Added zip field
    });

    await order.save();
 
    await Cart.deleteMany({ userId });

    res.status(201).json({ success: true, order });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = {
  createOrder,
};
