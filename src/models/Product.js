/** @format */

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  price: { type: Number, required: true, min: 0 },
  quantityAvailable: { type: Number, required: true, min: 0 },
  quantityCapped: { type: Boolean, required: true, default: true },
  description: { type: String, required: true, index: true },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategory",
      required: true,
      index: true,
    },
  ],
  imageUrl: { type: String, required: true },
  productFileUrl: { type: String, required: false },
  digital: { type: Boolean, required: true, default: true },
  vendor: { type: String, required: true, default: "Visionary" },
  expiryDate: { type: Date, required: false },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
