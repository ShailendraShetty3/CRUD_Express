const OrderLine = require("../models/order_lines.model");


const getOrderLines = async (req, res) => {
    try {
        const query = {};

        if (req.query.name) {
            query.name = req.query.name;
        }

        if (req.query.email) {
            query.email = req.query.email;
        }

        // Find users based on query parameters or return all if no params
        const order_lines = await OrderLine.find(query);

        if (order_lines.length === 0) {
            // Handle case where no users match the query
            return res.status(404).json({ message: "No order lines found" });
        }

        res.status(200).json(order_lines);

    } catch (error) {
        // Handle specific error scenarios
        if (error.name === 'CastError') {
            return res.status(400).json({ message: "Invalid query parameter" });
        }

        res.status(500).json({ message: error.message });
    }
};



const getOrderLine = async (req, res) => {
    try {
        const { id } = req.params;
        const order_lines = await OrderLine.findById(id);
        res.status(200).json(order_lines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}


const postOrderLine = async (req, res) => {
    try {
        const order_lines = await OrderLine.create(req.body)
        res.status(200).json(order_lines)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
    
}

const updateOrderLine = async (req, res) => {
    try {
        const { id } = req.params;
        const order_lines = await OrderLine.findByIdAndUpdate(id, req.body);
        if (!order_lines) {
            return res.status(404).json({ message: "order lines not found" });
        }

        // we can verify product updation
        const updatedOrderLines = await OrderLines.findById(id);
        res.status(200).json(updatedOrderLines);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}



const patchOrderLine = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOrderLines = await OrderLine.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        
        if (!updatedOrderLines) {
            return res.status(404).json({ message: "updated order lines not found" });
        }
        
        res.status(200).json(updatedOrderLines);  // Directly returning the updated user
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteOrderLine = async (req, res) => {
    try {
        const { id } = req.params;
        const order_lines = await OrderLine.findByIdAndDelete(id);

        if (!order_lines) {
            return res.status(404).json({ message: "order lines not found" });
        }
        res.status(200).json({ message: "order lines deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getOrderLines,
    getOrderLine,
    postOrderLine,
    updateOrderLine,
    deleteOrderLine,
    patchOrderLine
}

