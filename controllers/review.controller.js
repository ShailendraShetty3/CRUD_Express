const Review = require("../models/review.model.js");


////reviews
const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}



const getReview = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findById(id);
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}


const postReview = async (req, res) => {
    try {
        const review = await Review.create(req.body)
        res.status(200).json(review)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
    
}



const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findByIdAndUpdate(id, req.body);
        if (!review) {
            return res.status(404).json({ message: "review not found" });
        }

        // we can verify product updation
        const updatedReview = await Review.findById(id);
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}



const patchReview = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        
        if (!review) {
            return res.status(404).json({ message: "review not found" });
        }
        
        res.status(200).json(review);  // Directly returning the updated user
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findByIdAndDelete(id);

        if (!review) {
            return res.status(404).json({ message: "review not found" });
        }
        res.status(200).json({ message: "review deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




module.exports = {
    getReviews,
    getReview,
    postReview,
    updateReview,
    patchReview,
    deleteReview,
}

