const Credential = require("../models/credential.model");


const getCredentials = async (req, res) => {
    try {
        const query = {};

        if (req.query.name) {
            query.name = req.query.name;
        }

        if (req.query.email) {
            query.email = req.query.email;
        }

        // Find users based on query parameters or return all if no params
        const credentials = await Credential.find(query);

        if (credentials.length === 0) {
            // Handle case where no users match the query
            return res.status(404).json({ message: "No credential found" });
        }

        res.status(200).json(credentials);

    } catch (error) {
        // Handle specific error scenarios
        if (error.name === 'CastError') {
            return res.status(400).json({ message: "Invalid query parameter" });
        }

        res.status(500).json({ message: error.message });
    }
};



const getCredential = async (req, res) => {
    try {
        const { id } = req.params;
        const credential = await Credential.findById(id);
        res.status(200).json(credential);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}


const postCredential = async (req, res) => {
    try {
        const credential = await Credential.create(req.body)
        res.status(200).json(credential)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
    
}

const updateCredential = async (req, res) => {
    try {
        const { id } = req.params;
        const credential = await Credential.findByIdAndUpdate(id, req.body);
        if (!credential) {
            return res.status(404).json({ message: "credential not found" });
        }

        // we can verify product updation
        const updatedCredential = await Credential.findById(id);
        res.status(200).json(updatedCredential);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}



const patchCredential = async (req, res) => {
    try {
        const { id } = req.params;
        const credential = await Credential.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        
        if (!credential) {
            return res.status(404).json({ message: "credential not found" });
        }
        
        res.status(200).json(credential);  // Directly returning the updated user
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const deleteCredential = async (req, res) => {
    try {
        const { id } = req.params;
        const credential = await Credential.findByIdAndDelete(id);

        if (!credential) {
            return res.status(404).json({ message: "credential not found" });
        }
        res.status(200).json({ message: "credential deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getCredentials,
    getCredential,
    postCredential,
    updateCredential,
    deleteCredential,
    patchCredential
}

