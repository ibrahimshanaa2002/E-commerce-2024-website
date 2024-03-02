const asyncHandler = require("express-async-handler");
const Product = require("../modules/Product");
const Sale = require("../modules/Sale")

// addproduct
const addProduct = asyncHandler(async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// updateProduct

const updatedProduct = asyncHandler(async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// arrivals
const newArrivals = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 }).limit(4);

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// top selling
const topSelling = asyncHandler(async (req, res) => {
  try {
    // Perform aggregation to sum up the total quantity sold for each product
    const topSellingProducts = await Sale.aggregate([
      {
        $group: {
          _id: "$product",
          totalQuantitySold: { $sum: "$quantity" }
        }
      },
      {
        $lookup: {
          from: "products", // name of the collection to lookup
          localField: "_id",
          foreignField: "_id",
          as: "productInfo"
        }
      },
      {
        $unwind: "$productInfo" // Unwind to flatten the productInfo array
      },
      {
        $sort: { totalQuantitySold: -1 } // Sort by total quantity sold in descending order
      },
      {
        $project: {
          _id: "$productInfo._id",
          title: "$productInfo.title",
          totalQuantitySold: 1
        }
      }
    ]);

    res.status(200).json(topSellingProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
const allProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = {
  addProduct,
  updatedProduct,
  deleteProduct,
  newArrivals,
  topSelling,
  allProducts,
};
