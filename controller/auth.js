const User = require("../model/user");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

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
    if (!user.autheticate(password)) {
      return res.status(401).json({
        error: "Email and password do not match"
      });
    }
    // Create token
    const token = jwt.sign({_id: user._id}, process.env.SECRET);

    // Put token in cookie
    res.cookie("token", token, {expire: new Date() + 9999});

    // Send response to the frontEnd
    const {_id, firstName, email, role} = user
    return res.json({token, user: { _id, firstName, email, role }})
  })
  //next();
}

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successfully"
  });
}

// Protected router
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth"
});