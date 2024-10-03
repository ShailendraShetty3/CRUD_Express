const Social = require("../models/social_profile.model");


const getSocials = async (req, res) => {
    try {
        const query = {};

        if (req.query.name) {
            query.name = req.query.name;
        }

        if (req.query.email) {
            query.email = req.query.email;
        }

        // Find users based on query parameters or return all if no params
        const socials = await Social.find(query);

        if (socials.length === 0) {
            // Handle case where no users match the query
            return res.status(404).json({ message: "No social found" });
        }

        res.status(200).json(socials);

    } catch (error) {
        // Handle specific error scenarios
        if (error.name === 'CastError') {
            return res.status(400).json({ message: "Invalid query parameter" });
        }

        res.status(500).json({ message: error.message });
    }
};



const getSocial = async (req, res) => {
    try {
        const { id } = req.params;
        const social = await Social.findById(id);
        res.status(200).json(social);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}


const postSocial = async (req, res) => {
    try {
        const social = await Social.create(req.body)
        res.status(200).json(social)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
    
}

const updateSocial = async (req, res) => {
    try {
        const { id } = req.params;
        const social = await Social.findByIdAndUpdate(id, req.body);
        if (!social) {
            return res.status(404).json({ message: "Product not found" });
        }

        // we can verify product updation
        const updatedSocial = await Social.findById(id);
        res.status(200).json(updatedSocial);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}



const patchSocial = async (req, res) => {
    try {
        const { id } = req.params;
        const social = await Social.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        
        if (!social) {
            return res.status(404).json({ message: "Social not found" });
        }
        
        res.status(200).json(social);  // Directly returning the updated user
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteSocial = async (req, res) => {
    try {
        const { id } = req.params;
        const social = await Social.findByIdAndDelete(id);

        if (!social) {
            return res.status(404).json({ message: "Social not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getSocials,
    getSocial,
    postSocial,
    updateSocial,
    deleteSocial,
    patchSocial
}

