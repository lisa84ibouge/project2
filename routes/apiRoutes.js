var db = require("../models");
var User = require('../models/user')

module.exports = function(app) {
  // read
  app.get("/api/users", function(req, res) {
    console.log(req.body, 'req body?')
    db.User.findAll({
      where: {
        city: req.body.city
      }
    }).then(function(result) {
      res.json(result)
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
  app.post("/api/user", function (req, res) {
    console.log('found it');
    var matchArr = {
      name: '',
      city: '',
      state: '',
      age: '',
      photo: ''
    }

    // var userArr = req.body;
    // var userCity = userArr.city;
    db.User.create({
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      photo: req.body.photo
    }).then(function (dbUser) {
      // for (var i = 0; i < User.length; i++) {
      //   console.log(User.length, 'user')
      //   var matchInfo = User[i];
      //   for (var j = 0; j < matchInfo[j].city.length; j++) {
      //     if (userCity == matchInfo.city) {
      //       console.log('match found')
      //       res.push(matchArr)
      //     }
        // }
        res.json(dbUser)
      })
      

    // });

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
