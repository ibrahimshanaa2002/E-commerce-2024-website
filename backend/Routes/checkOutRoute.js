const express = require("express");
const { protect } = require("../middlewares/authMiddleWare");
const { createOrder } = require("../controllers/checkOutController");
const router = express.Router();

router.post("/create-order", protect,createOrder);


module.exports = router;