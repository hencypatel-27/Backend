const mongoose = require("mongoose");

const snippetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: "Javascript"
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Snippet = mongoose.model("Snippet", snippetSchema);

module.exports = Snippet;