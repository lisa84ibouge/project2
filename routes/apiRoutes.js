var db = require("../models");
var secured = require("../ServerServices/routeAuthorization");
var Op = db.Sequelize.Op;
require("dotenv").config();
var flights = require("../ServerServices/Services/FlightService")(process.env.AE_SERCRET);


module.exports = function (app) {
  // read the info at this path

  app.get("/api/users", secured(), function (req, res) {
    console.log(flights.makeApiCall({ dest: "Seattle", home: "Portland" }));
    // req.query is the result of the query
    console.log(req.query);
    db.User.findAll({
      where: {
        city: req.query.city
      }
  }).then(function (users) {
    console.log(users);

    res.json(users);
  })

  })

// create
app.post("/matches", secured(), function (req, res) {
  let temp;
  // var noMatch = ['Sorry'];
  db.User.findAll({
    where: {
      [Op.or]: [{
        city: req.body.city
      },
      {
        countryTwo: req.body.countryTwo
      },
      {
        cityTwo: req.body.cityTwo
      }
      ],
    },

  }).then(function (matchingUsers) {
    temp = matchingUsers;
    console.log('here ---->', temp.length)
    // if there is a match, then do the for loop
    if (temp.length > 0) {
      for (var i = 0; i < temp.length; i++) {
        if (temp[i].city == req.body.city) {
          console.log('matching name:', temp[i].name, ': ', temp[i].city, 'city/country');
          // matching city is working. logging out matching city
        } else if (temp[i].countryTwo == req.body.countryTwo) {
          console.log('Matching country: ', temp[i].countryTwo, 'matching name: ', temp[i].name);
        } else if (temp[i].cityTwo == req.body.cityTwo) {
          console.log('matching city to visit: ', temp[i].cityTwo + ' with: ', temp[i].name)
        } else {
          console.log('matches')
        }
      }
      // } else {
      //   // the else condition doesn't run
      //   console.log('No matches found!');
      //   // res.redirect('/questions');
    };
  }).then(function () {
    db.User.create({
      name: req.body.name,
      city: req.body.city,
      countryTwo: req.body.countryTwo,
      cityTwo: req.body.cityTwo,
      photo: req.body.photo,
      age: req.body.age,
      lang: req.body.lang,
      secLang: req.body.secLang,
      bio: req.body.bio
    }).then(function () {
      console.log('temp here-----', temp.length)
      // if(temp.length == 0 ){
      //   res.render('/api/user',noMatch)
      // }
      console.log(flights.makeApiCall({ dest: req.body.city, home: req.body.cityTwo }));
      // no need to run the for loop because the 'where' clause already filters 
      // res.json(temp);
      res.render("layouts/results.handlebars", {
        destinationCity: req.body.city,
        matches: temp

      })
      //   res.send(temp)
    })
  })
})

  }
