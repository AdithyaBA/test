const User = require("../model/user");
const { check, validationResult } = require("express-validator");

// signup controller
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

// Signin controller
exports.signin = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("aaaaaa", errors.array()[0]);
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }
  const {email, password} = req.body;
  User.findOne({email}, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USER email does not exists"
      });
    }
  })
  next();
}