const User = require("../model/user");
const { check, validationResult } = require("express-validator");
//const jwt = require("jsonwebtoken");
//const { expressjwt: jwt } = require("express-jwt");

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  const user = new User(req.body);
  user.save((err, users) => {
    if(err){
        return res.status(404).json({
            error: "No able to save user in DB"
        })
    }
    res.status(200).json({
        success: true,
        users
    })
  })
};