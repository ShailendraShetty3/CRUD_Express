const express = require('express')
const User = require("../models/user.model.js");
const router = express.Router();

const { 
    getUsers,
    getUser,
    postUser,
    updateUser,
    deleteUser,
    patchUser
  
} = require("../controllers/user.controller.js");




router.get("/", getUsers)
router.get("/:id", getUser)

router.post("/", postUser)
router.put("/:id", updateUser)
router.patch("/:id", patchUser)
router.delete("/:id", deleteUser)






module.exports = router;