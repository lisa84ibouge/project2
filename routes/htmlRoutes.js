var db = require("../models");
var path = require("path");
var express = require("express");
var passport = require("passport");


module.exports = function(app) {
  app.get("/",  {
    //res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

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


};
