const User = require("../model/user");

exports.getAllUsers = (req, res) => {
    User.find((err, user) => {
        if(err){
            return res.status(400).json({
                error: "No user found"
            })
        }
        res.status(200).json({
            user
        })
    })
}

// Get single user
exports.getSingleUser = (req, res) => {
    
}