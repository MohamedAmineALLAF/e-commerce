
const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type:mongoose.Types.ObjectId,
    ref:"Category"
  }
});

module.exports = mongoose.model("Product", Product);