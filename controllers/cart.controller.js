const Cart = require("../models/cart.model");


const getCarts = async (req, res) => {
    try {
        const query = {};

        if (req.query.name) {
            query.name = req.query.name;
        }

        if (req.query.email) {
            query.email = req.query.email;
        }

        // Find users based on query parameters or return all if no params
        const carts = await Cart.find(query);

        if (carts.length === 0) {
            // Handle case where no users match the query
            return res.status(404).json({ message: "No cart found" });
        }

        res.status(200).json(carts);

    } catch (error) {
        // Handle specific error scenarios
        if (error.name === 'CastError') {
            return res.status(400).json({ message: "Invalid query parameter" });
        }

        res.status(500).json({ message: error.message });
    }
};



const getCart = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findById(id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}


const postCart = async (req, res) => {
    try {
        const cart = await Cart.create(req.body)
        res.status(200).json(cart)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
    
}

const updateCart = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findByIdAndUpdate(id, req.body);
        if (!cart) {
            return res.status(404).json({ message: "cart not found" });
        }

        // we can verify product updation
        const updatedCart = await Cart.findById(id);
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}



const patchCart = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        
        res.status(200).json(cart);  // Directly returning the updated user
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findByIdAndDelete(id);

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.status(200).json({ message: "Cart deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getCarts,
    getCart,
    postCart,
    updateCart,
    deleteCart,
    patchCart
}

