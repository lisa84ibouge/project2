module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // this field for city and country of origin
    city: {
      // country: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
    },
    age: {
      type: DataTypes.INTEGER(2)
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // countryTwo is user's second choice of country to visit
    countryTwo: {
      type:DataTypes.STRING,
      allowNull:false
    },
    cityTwo: {
      type: DataTypes.STRING,
      allowNull:false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lang: {
      type: DataTypes.STRING,
      allowNull: true
    },
    secLang: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email:{
      type:DataTypes.STRING,
    },
    userName:{
      type:DataTypes.STRING,
    }
  });
  return User;
};
