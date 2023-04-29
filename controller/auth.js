exports.signup = (req, res, next) => {
    res.send(req.body)
    next();
}