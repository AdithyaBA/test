const express = require("express");
const router = express.Router();
const {getAllUsers, getSingleUser} = require("../controller/user");


// Get all users
router.get("/users", getAllUsers);

// Get single user
router.get("/user/:id", getSingleUser);

module.exports = router;
