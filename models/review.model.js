const mongoose = require('mongoose');

// Review schema
const ReviewSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        // Reference to the product
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
