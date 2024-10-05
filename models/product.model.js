const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,  // References the Category model
      ref: "Category",  // Links to the Category model
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please Enter the Product Name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
