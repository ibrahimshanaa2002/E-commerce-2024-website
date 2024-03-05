const asyncHandler = require("express-async-handler");
const Product = require("../modules/Product");
const Sale = require("../modules/Sale")

// addproduct
const addProduct = asyncHandler(async (req, res) => {
  try {
    // Split color and size strings into arrays
    const colors = req.body.color.map(colorString => colorString.split(' ').map(color => color.trim()));
    const sizes = req.body.size.map(sizeString => sizeString.split(' ').map(size => size.trim()));

    // Create a new product instance with split color and size arrays
    const newProduct = new Product({
      ...req.body,
      color: colors.flat(), // Flatten the array to remove nested arrays
      size: sizes.flat() // Flatten the array to remove nested arrays
    });

    // Save the product to the database
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
    const products = await Product.find().sort({ createdAt: -1 }).limit(14);

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
const seasons = asyncHandler(async(req, res) => {
  try {
    // Fetch all products
    const products = await Product.find();

    // Check if any product has a defined season
    const hasSeason = products.some(product => product.season);

    // Extract unique seasons from all products if they exist
    let seasons;
    if (hasSeason) {
      seasons = [...new Set(products.map(product => product.season))];
    } else {
      // Define all seasons as the default
      seasons = ["winter", "summer", "spring", "fall"];
    }

    // Send the array of seasons to the frontend
    res.json(seasons);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = {
  addProduct,
  updatedProduct,
  deleteProduct,
  newArrivals,
  topSelling,
  allProducts,
  seasons
};
