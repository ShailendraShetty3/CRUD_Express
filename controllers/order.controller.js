const Order = require("../models/order.model");


const getOrders = async (req, res) => {
    try {
        const query = {};

        if (req.query.name) {
            query.name = req.query.name;
        }

        if (req.query.email) {
            query.email = req.query.email;
        }

        // Find users based on query parameters or return all if no params
        const orders = await Order.find(query);

        if (orders.length === 0) {
            // Handle case where no users match the query
            return res.status(404).json({ message: "No order found" });
        }

        res.status(200).json(orders);

    } catch (error) {
        // Handle specific error scenarios
        if (error.name === 'CastError') {
            return res.status(400).json({ message: "Invalid query parameter" });
        }

        res.status(500).json({ message: error.message });
    }
};



const getOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}


const postOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body)
        res.status(200).json(order)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
    
}

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndUpdate(id, req.body);
        if (!order) {
            return res.status(404).json({ message: "order not found" });
        }

        // we can verify product updation
        const updatedOrder = await Order.findById(id);
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}



const patchOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        
        res.status(200).json(order);  // Directly returning the updated user
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndDelete(id);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getOrders,
    getOrder,
    postOrder,
    updateOrder,
    deleteOrder,
    patchOrder
}

