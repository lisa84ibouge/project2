var db = require("../models");
// var op = db.Sequelize.Op;

module.exports = function(app) {
  // read the info at this path
  app.get("/api/users", function(req, res) {
    console.log(req.body, 'req body?')
    // req.query is the result of the query
    console.log(req.query)
    db.User.findAll({
      where: {
        city: req.query.city,

      }
    }).then(function(users) {
      // result is the result of query
      console.log(users)
      res.json(users)
    //   var userCity = req.params.city;
  
    //   for (var i = 0; i <dbUser.length; i++){
    //     if (userCity == dbUser[i].city){
    //     return res.json(dbUser[i].city);
    //   } else{
    //     return res.send('no match found')
    //   }
  
    //   }
    //  console.log('city: ', dbUser)
    });

  });

  

  // create
  app.post("/api/user/", function (req, res) {
    db.User.create({
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      photo: req.body.photo,
      age:req.body.age,
      lang:req.body.lang,
      country: req.body.country,
      secLang: req.body.secLang

    }).then(function (dbUser) {
      db.User.findAll({
        where: {
          city: req.body.city,
        }
      }).then(function(matchingUsers){
        console.log('here ---->', matchingUsers)
        for (let i = 0; i < matchingUsers.length; i++) {
          console.log('matching:', matchingUsers[i].name, ': ', matchingUsers[i].city);
        }
        // no need to run the for loop because the 'where' clause already filters 
        res.json(matchingUsers);
      })
     
    });

  });



// update
  app.put("/api/users", function(req, res) {
    db.User
      .update(
        {
          name: req.body.name,
          city: req.body.city,
          state: req.body.state,
          photo: req.body.photo
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err, res) {
        res.json(err);
      });
  });
};
