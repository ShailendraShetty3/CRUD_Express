const mongoose = require("mongoose");

const OrderLinesSchema = mongoose.Schema(
  {
    orderid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    productid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderLines = mongoose.model("OrderLines", OrderLinesSchema);

module.exports = OrderLines;
