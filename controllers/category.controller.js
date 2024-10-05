const Category = require("../models/category.model");


const getCategories = async (req, res) => {
    try {
        const query = {};

        if (req.query.name) {
            query.name = req.query.name;
        }

        if (req.query.email) {
            query.email = req.query.email;
        }

        // Find users based on query parameters or return all if no params
        const categories = await Category.find(query);

        if (categories.length === 0) {
            // Handle case where no users match the query
            return res.status(404).json({ message: "No category found" });
        }

        res.status(200).json(categories);

    } catch (error) {
        // Handle specific error scenarios
        if (error.name === 'CastError') {
            return res.status(400).json({ message: "Invalid query parameter" });
        }

        res.status(500).json({ message: error.message });
    }
};



const getCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}


const postCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body)
        res.status(200).json(category)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
    
}

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndUpdate(id, req.body);
        if (!category) {
            return res.status(404).json({ message: "category not found" });
        }

        // we can verify product updation
        const updatedCategory = await Category.findById(id);
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}



const patchCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        
        if (!category) {
            return res.status(404).json({ message: "category not found" });
        }
        
        res.status(200).json(category);  // Directly returning the updated user
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndDelete(id);

        if (!category) {
            return res.status(404).json({ message: "category not found" });
        }
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getCategories,
    getCategory,
    postCategory,
    updateCategory,
    deleteCategory,
    patchCategory
}

