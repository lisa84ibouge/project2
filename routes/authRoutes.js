var passport = require("passport");
var util = require("util");
var url = require("url");
var querystring = require("querystring");

module.exports = function (app) {
    app.get("/login", passport.authenticate("auth0", { scope: "openid email profile" }), (req, resp) => {
        resp.redirect("/index");
    })

    app.get("/callback", function (req, resp, next) {
        passport.authenticate("auth0", function (err, user, info) {
            if (err) { return next(err); }
            if (!user) { return resp.redirect("/"); }
            req.logIn(user, function (err) {
                console.log("---------");
                console.log(user);
                if (err) { console.log(err); return (next); }
                const retTo = req.session.returnTo;
                delete req.session.returnTo;
                console.log("redirect")
                resp.redirect(retTo || "/form");

            });
        })(req, resp, next);
    })

    app.get("/logout", (req, res) => {
        req.logout();

        var returnTo = req.protocol + '://' + req.hostname;
        var port = req.connection.localPort;
        if (port !== undefined && port !== 80 && port !== 443) {
            returnTo += ':' + port;
        }
        var logoutURL = new URL(
            util.format('https://%s/logout', process.env.AUTH0_DOMAIN)
        );
        var searchString = querystring.stringify({
            client_id: process.env.AUTH0_CLIENT_ID,
            returnTo: returnTo
        });
        logoutURL.search = searchString;

        res.redirect(logoutURL);
    })

}

