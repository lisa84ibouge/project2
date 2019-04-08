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
    // var noMatch = ['Sorry'];
    db.User.findAll({
      where: {
        [Op.or]: [
          { city: req.body.city }, 
          { countryTwo: req.body.countryTwo },
          { cityTwo:req.body.cityTwo}
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
            console.log('matching city to visit: ', temp[i].cityTwo + ' with: ', temp[i].name )
          } else {
            console.log('matches')
          }
        }
    
       };
    }).then(function() {
      db.User.create({
      name: req.body.name,
      city: req.body.city,
      countryTwo :req.body.countryTwo,
      cityTwo:req.body.cityTwo,
      photo: req.body.photo,
      age: req.body.age,
      lang: req.body.lang,
      secLang: req.body.secLang,
      bio: req.body.bio
    }).then(function () {
      console.log('temp here-----', temp.length)
      
      var noMatch =[{notFound:'sorry no matches'}];
      res.render('index',noMatch[0])
      // if(temp.length == 0 ){
      //   res.render('/api/user',noMatch)
      // }
   
      // no need to run the for loop because the 'where' clause already filters 
      // res.json(temp);
      
      // res.send(temp)
    })
  })
});
};
