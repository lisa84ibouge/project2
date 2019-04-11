var db = require("../models");
var Op = db.Sequelize.Op;

module.exports = function (app) {
  app.get("/api/users", function (req, res) {
    console.log(req.body, "req body?");
    console.log(req.query);
    db.User.findAll({
      where: {
        cityOne: req.query.cityOne
      }
    }).then(function (users) {
      console.log(users);
      res.json(users);
    });
  });

  // create
  app.post("/matches", function (req, res) {
    let temp;
 
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
          if (temp[i].cityOne == req.body.cityOne) {
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
        res.render("layouts/results.handlebars", {
          destinationCity: req.body.city, 
          matches:temp

        })
        //   res.send(temp)
      })
    })
  });
};