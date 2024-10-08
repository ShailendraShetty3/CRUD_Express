const mongoose = require('mongoose');

// Review schema
const ReviewSchema = new mongoose.Schema(
    {
        userid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        productid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
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
        
    },
    {
        timestamps: true,
    }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
