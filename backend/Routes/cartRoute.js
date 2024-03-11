const express = require("express");
const { addProductToCart } = require("../controllers/cartControllers");
const { protect } = require("../middlewares/authMiddleWare");
const router = express.Router();

router.post("/addToCart/:productId",protect, addProductToCart);

module.exports = router;
