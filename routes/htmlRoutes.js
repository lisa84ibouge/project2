var db = require("../models");
var path = require("path");
var express = require("express");
var passport = require("passport");
var dotenv = require("dotenv");
var util = require("util");
var url = require("url");

var protected = require("../ServerServices/routeAuthorization");

dotenv.config();


module.exports = function (app) {
  app.get("/form", protected(), function (req, resp) {


    resp.render('layouts/form', { data: req.user });
  })

  app.get('/questions', protected(), function (req, resp) {
    resp.sendFile(path.join(__dirname, '../public/html/questions.html'))
  })


  app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, "../public/html/login.html"));
  })



}

