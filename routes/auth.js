const express = require("express");
const router = express.Router();
const {signup, signin} = require("../controller/auth");
const {check} = require("express-validator");

router.post("/signup", [
    check("firstName", "Please enter the firstName").isLength({min: 3}),
    check("lastName", "Please enter the lastName").isLength({min: 1}),
    check("email", "Please enter the valid email").isEmail(),
    check("password", "Enter the valid password").isLength({min: 4})
], signup);

// Signin Route
router.post("/signin", [
    check("email", "Please enter the valid email").isEmail(),
    check("password", "Please enter the valid password").isLength({min: 2})
], signin);

module.exports = router;