/** @format */

const mongoose = require("mongoose");

const journalEntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true, default: Date.now, index: true },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JournalCategory",
      required: true,
      index: true,
    },
  ],
  title: { type: String, required: true },
  prompt: { type: String, required: true },
  entry: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const JournalEntry = mongoose.model("JournalEntry", journalEntrySchema);

module.exports = JournalEntry;
