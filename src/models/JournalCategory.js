const mongoose = require("mongoose");

const journalCategorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, index: true },
  description: { type: String, required: false },
  imageUrl: { type: String, required: false },
});

const JournalCategory = mongoose.model(
  "JournalCategory",
  journalCategorySchema,
);

module.exports = JournalCategory;

// So I have Journal, JournalCategory, Order, Product, ProductCategory, User schemas
