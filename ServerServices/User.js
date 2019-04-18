module.exports = function () {
    return function (req, res, next) {
        console.log("User");
        console.log(req.user);
        //console.log(res);
        console.log(res.locals.user);
        next();
    };
};