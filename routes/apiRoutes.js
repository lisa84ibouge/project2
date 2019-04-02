var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/user", function(req, res) {
    console.log('found it');
    
    db.User.create({
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      photo: req.body.photo
    }).then(function(dbUser) {
      res.json(dbUser);
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
