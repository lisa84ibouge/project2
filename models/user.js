

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          argv:[1,2]
        }
      }
    },
    age: {
      type: DataTypes.INTEGER(2)
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  // StockUsers.associate = function(models) {
  //   StockUsers.hasMany(models.StockUsersData, {
  //     onDelete: "cascade"
  //   });
  // };
  return User;
};
