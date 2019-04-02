var db = require("../models");

module.exports = function(app) {
  // read
  app.get("/api/users", function(req, res) {
    db.User.findAll({
      where: {
        city: req.params.city
      }
    }).then(function(dbUser) {
      res.json(dbUser);
      console.log('city: ', dbUser)
    });
  });

  // app.get('/api/users', function(req,resp){
  //   db.User.findAll({
  //     where: {
  //       city:req.params.city
  //     }
  //   }).then(function(dbUser){
  //    resp.json(dbUser)
  //    console.log('city: ',dbUser )
  //   })
  // })

  // create
  app.post("/api/user", function (req, res) {
    console.log('found it');

    db.User.create({
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      photo: req.body.photo
    }).then(function (dbUser) {
      res.json(dbUser);
    //   var userArr = req.body;
    //   var userCity = userArr.city;
    //   for (var i = 0; i < dbUser.length; i++) {
    //     if (dbUser.city == userCity) {
    //       console.log('match found!' + dbUser.city, 'data', userCity, 'input')
    //     } else {
    //       console.log('sorry, no match');
    //     }
    //   }
     });
    
    });

  

  // app.delete("/api/users:id", function(req, res) {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });


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
