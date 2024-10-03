const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
