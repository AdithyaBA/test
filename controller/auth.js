const User = require("../model/user");
const {validationResult} = require("express-validator");

// Signup middleware
exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        })
    }
    const user = new User(req.body);
    console.log(user);
    next();
}