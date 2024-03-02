const express = require("express");
const { addProduct, updatedProduct, deleteProduct, newArrivals, topSelling, allProducts } = require("../controllers/productController");
const router = express.Router();


router.post("/addproduct", addProduct);
router.put("/:id",updatedProduct)
router.delete("/:id",deleteProduct)
router.get("/newArrivals",newArrivals)
router.get("/topSelling",topSelling)
router.get("/allProducts",allProducts)
module.exports = router;
