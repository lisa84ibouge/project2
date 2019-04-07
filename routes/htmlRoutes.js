var db = require("../models");
var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
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
