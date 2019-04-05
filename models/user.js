

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    age: {
      type: DataTypes.INTEGER(2)
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue: 'USA'
      
    },
    lang: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    secLang: {
      type:DataTypes.STRING,
      allowNull:true,
    }
  });
   return User;
};
