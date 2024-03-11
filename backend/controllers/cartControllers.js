const asyncHandler = require("express-async-handler");
const Cart = require("../modules/Cart");
const Product = require("../modules/Product");

const addProductToCart = asyncHandler(async (req, res) => {
    const { color, size, quantity } = req.body;
    let { productId } = req.params;

    try {
        // Remove any additional characters from productId
        productId = productId.replace(":", "");

        // Get the user ID from the request
        const userId = req.user._id;

        // Check if the product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Create a new cart item
        const cartItem = new Cart({
            productId,
            userId,
            quantity,
            size,
            color
        });

        // Save the cart item to the database
        await cartItem.save();

        // Return success response
        return res.status(200).json({ message: "Product added to cart successfully", cartItem });
    } catch (error) {
        // Handle any errors
        console.error("Error adding product to cart:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = {
    addProductToCart
};
