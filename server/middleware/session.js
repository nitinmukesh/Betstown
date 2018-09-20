module.exports = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.status(403).json({message: "User not logged in."});
    } else {
        next();
    }
}