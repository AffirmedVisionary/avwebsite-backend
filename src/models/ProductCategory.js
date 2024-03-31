const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, index: true },
  description: { type: String, required: false },
  imageUrl: { type: String, required: false },
});

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema,
);

module.exports = ProductCategory;
