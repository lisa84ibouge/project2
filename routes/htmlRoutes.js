var db = require("../models");
var path = require("path");
var express = require("express");
var passport = require("passport");
var dotenv = require("dotenv");
var util = require("util");
var url = require("url");
var querystring = require("querystring");

dotenv.config();


module.exports = function (app) {
  app.get("/", passport.authenticate("auth0", {
    scope: "openid email profile"
    //res.sendFile(path.join(__dirname, "../public/html/login.html"));
  }), (req, res) => {
    console.log(res);
    res.redirect("/form");
  })


  app.get('/questions', function (req, resp) {
    resp.sendFile(path.join(__dirname, '../public/html/questions.html'))
  })


  app.get("/survey", (req, resp) => {
    resp.sendFile(path.join(__dirname, "../public/html/survey.html"));
  })

  app.get("/form", (req, resp) => {
    resp.sendFile(path.join(__dirname, "../public/html/form.html"));
  })

  app.get("/login", (req, resp) => {
    resp.sendFile(pathjoin.path(__dirname, "../public/html/login.html"));
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




};
