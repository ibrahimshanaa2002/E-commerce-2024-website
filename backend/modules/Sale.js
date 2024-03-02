const mongoose = require('mongoose');

const SaleSchema = mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    // Add any other fields you may need, such as client information, purchase date, etc.
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;
