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
  app.get("/", protected(), function (req, resp) {
    console.log("form")
    console.log(req.user);
    //resp.sendFile(path.join(__dirname, "../public/html/form.html"))
    resp.render('layouts/main', { data: req.user });
  })

  app.get('/questions', protected(), function (req, resp) {
    resp.sendFile(path.join(__dirname, '../public/html/questions.html'))
  })


  app.get("/survey", protected(), (req, resp) => {
    resp.sendFile(path.join(__dirname, "../public/html/survey.html"));
  })

  app.get("/form", protected(), (req, resp) => {
    console.log(resp.body);
    resp.sendFile(path.join(__dirname, "../public/html/form.html"));
  })









}

