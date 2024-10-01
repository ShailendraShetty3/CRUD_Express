const express = require('express')
const Review = require("../models/review.model.js");
const router = express.Router();

const { 
    getReviews,
    getReview,
    postReview,
    updateProduct,
    deleteProduct,
  
} = require("../controllers/product.controller.js");




router.get("/", getReviews)
router.get("/:id", getReview)

router.post("/", postReview)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)






module.exports = router;