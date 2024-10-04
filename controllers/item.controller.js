const Item = require("../models/item.model");


const getItems = async (req, res) => {
    try {
        const query = {};

        if (req.query.name) {
            query.name = req.query.name;
        }

        if (req.query.email) {
            query.email = req.query.email;
        }

        // Find users based on query parameters or return all if no params
        const items = await Item.find(query);

        if (items.length === 0) {
            // Handle case where no users match the query
            return res.status(404).json({ message: "No item found" });
        }

        res.status(200).json(items);

    } catch (error) {
        // Handle specific error scenarios
        if (error.name === 'CastError') {
            return res.status(400).json({ message: "Invalid query parameter" });
        }

        res.status(500).json({ message: error.message });
    }
};



const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findById(id);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}


const postItem = async (req, res) => {
    try {
        const item = await Item.create(req.body)
        res.status(200).json(item)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
    
}

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findByIdAndUpdate(id, req.body);
        if (!item) {
            return res.status(404).json({ message: "item not found" });
        }

        // we can verify product updation
        const updatedItem = await Item.findById(id);
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}



const patchItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        
        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        
        res.status(200).json(item);  // Directly returning the updated user
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Item.findByIdAndDelete(id);

        if (!item) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getItems,
    getItem,
    postItem,
    updateItem,
    deleteItem,
    patchItem
}

