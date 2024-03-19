// Import necessary modules
const Order = require('../modules/order');

// Controller function to create an order
const createOrder = async (req, res) => {
  try {
    // Extract order data from request body
    const { user, products, subtotal, total, phoneNumber, streetAddress, state, zip, size, color, email, name } = req.body;

    // Create a new order instance
    const newOrder = new Order({
      user,
      products,
      subtotal,
      total,
      phoneNumber,
      streetAddress,
      state,
      zip,
      size,
      color,
      email,
      name
    });

    // Save the order to the database
    const savedOrder = await newOrder.save();

    // Respond with the created order
    res.status(201).json(savedOrder);
  } catch (error) {
    // Handle errors
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Export the controller function
module.exports = { createOrder };
