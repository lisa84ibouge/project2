module.exports = function () {
    return function secured(req, res, next) {
        console.log("Auth");
        console.log(req.user);
        if (req.user) { return next(); }
        req.session.returnTo = req.originalUrl;
        res.redirect("/login");
    }
}