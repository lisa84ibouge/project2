var db = require("../models");
var Op = db.Sequelize.Op;

module.exports = function (app) {
  app.get("/api/users", function (req, res) {
    console.log(req.body, "req body?");
    console.log(req.query);
    db.User.findAll({
      where: {
        city: req.query.city
      }
    }).then(function (users) {
      console.log(users);
      res.json(users);
    });
  });

  // create
  app.post("/api/user/", function (req, res) {
    let temp;
    db.User.findAll({
      where: {
        [Op.or]: [{ city: req.body.city }, { country: req.body.country }],
      },
    }).then(function (matchingUsers) {
      temp = matchingUsers;
      console.log('here ---->', temp.length)
      // if there is a match, then do the for loop
      if (temp.length > 0) {
        for (var i = 0; i < temp.length; i++) {
          if (temp[i].city == req.body.city) {
            console.log('matching name:', temp[i].name, ': ', temp[i].city, 'city');
            // matching city is working. logging out matching city
          } else {
            console.log('Matching country: ', temp[i].country, 'matching name: ', temp[i].name);
          }
        }
      } else {
        // the else condition doesn't run
        console.log('No matches found!');
        // res.redirect('/questions');
      };
    }).then(function() {
      db.User.create({
      name: req.body.name,
      city: req.body.city,
      photo: req.body.photo,
      age: req.body.age,
      lang: req.body.lang,
      country: req.body.country,
      secLang: req.body.secLang
    }).then(function () {
      console.log('temp here-----', temp.length)
      // no need to run the for loop because the 'where' clause already filters 
      // res.json(temp);
      
      res.send(temp)
    })
  })
});
};
