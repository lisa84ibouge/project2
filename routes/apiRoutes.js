var db = require("../models");
var Op = db.Sequelize.Op;

module.exports = function(app) {
  // read the info at this path
  app.get("/api/users", function(req, res) {
    console.log(req.body, "req body?");
    // req.query is the result of the query
    console.log(req.query);
    db.User.findAll({
      where: {
        city: req.query.city
      }
    }).then(function(users) {
      // result is the result of query
      console.log(users);
      res.json(users);
    });
  });
  // create
  app.post("/api/user/", function (req, res) {
    db.User.create({
      name: req.body.name,
      city: req.body.city,
      photo: req.body.photo,
      age: req.body.age,
      lang: req.body.lang,
      country: req.body.country,
      secLang: req.body.secLang

    }).then(function (dbUser) {
      db.User.findAll({
        where: {
          [Op.or]: [{ city: req.body.city }, { country: req.body.country }],
        },

      }).then(function (matchingUsers) {
        console.log('here ---->', matchingUsers)
        for (let i = 0; i < matchingUsers.length; i++) {
          if (matchingUsers[i].city) {
            console.log('matching city:', matchingUsers[i].name, ': ', matchingUsers[i].city);
            // matching city is working. logging out matching city
          } else {
            console.log('Matching country: ', matchingUsers[i].country, 'matching name: ', matchingUsers[i].name)
          }

        }
        // no need to run the for loop because the 'where' clause already filters 
        res.json(matchingUsers);
      })

    });

  });

  // code that was working(with helps from alex and arjun),except the if statment.

//   app.post("/api/user/", function(req, res) {
//     db.User.create({
//       name: req.body.name,
//       city: req.body.city,
//       state: req.body.state,
//       photo: req.body.photo,
//       age: req.body.age,
//       lang: req.body.lang,
//       country: req.body.country,
//       secLang: req.body.secLang
//     }).then(function(dbUser) {
//       db.User.findAll({
//         where: {
//           //   $or:[
//           //     {
//           //     city:req.body.city
//           //   }, {
//           //     country:req.body.country
//           //   }
//           // ],
//           // id:{$not: req.body.id}
//           [Op.or]: [{ city: req.body.city }, { country: req.body.country }]
//           // id:{
//           //   [Op.not]:[req.body.id]
//           // }
//         }
//       }).then(function(matchingUsers) {
//         console.log("here ---->", matchingUsers);
//         for (let i = 0; i < matchingUsers.length; i++) {
//           if (!matchingUsers[i].city) {
//             console.log(
//               "matching:",
//               matchingUsers[i].name,
//               ": ",
//               matchingUsers[i].city
//             );
//           } else {
//             console.log(matchingUsers[i].country, " country matched");
//             res.json(matchingUsers[i].country);
//           }
//         }
//       });
//     });
//   });
 };