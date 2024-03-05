const express = require("express");
const { addProduct, updatedProduct, deleteProduct, newArrivals, topSelling, allProducts, seasons, styles } = require("../controllers/productController");
const router = express.Router();


router.post("/addproduct", addProduct);
router.put("/:id",updatedProduct)
router.delete("/:id",deleteProduct)
router.get("/newArrivals",newArrivals)
router.get("/topSelling",topSelling)
router.get("/allProducts",allProducts)
router.get('/seasons', seasons);


module.exports = router;
