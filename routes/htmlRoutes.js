var db = require("../models");
var path = require("path");
var express = require("express");
var passport = require("passport");
var dotenv = require("dotenv");
var util = require("util");
var url = require("url");

var secured = require("../ServerServices/routeAuthorization");

dotenv.config();


module.exports = function (app) {
  app.get("/", secured(), function (req, resp) {
    resp.sendFile(path.join(__dirname, "../public/html/questions.html"))
    // resp.render('results', { layout: 'default', template: 'results' });
  })

  app.get('/questions', secured(), function (req, resp) {
    resp.sendFile(path.join(__dirname, '../public/html/questions.html'))
  })


  app.get("/survey", secured(), (req, resp) => {
    resp.sendFile(path.join(__dirname, "../public/html/survey.html"));
  })

  app.get("/form", secured(), (req, resp) => {
    console.log(req.body);
    resp.sendFile(path.join(__dirname, "../public/html/form.html"));
  })









}

