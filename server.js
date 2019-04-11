// Use a Node and Express Web Server;
// Be backed by a MySQL Database an ORM (not necessarily Sequelize);
// Have both GET and POST routes for retrieving and adding new data;
// Be deployed using Heroku (with Data);
// Utilize at least one new library, package, or technology that we haven’t discussed;
// Have a polished frontend / UI;
// Have folder structure that meets MVC Paradigm;
// Meet good quality coding standards (indentation, scoping, naming).
// Must not expose sensitive API key information on the server, see Protecting-API-Keys-In-Node.md

require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// codes for cors..
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// var noMatch =[{notFound:'sorry no matches'}];
// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("Listening on port: http://localhost:" + PORT);
  });
});
