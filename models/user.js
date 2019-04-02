

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
        len: [1]
      }
    },
    age: {
      type: DataTypes.INTEGER
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // StockUsers.associate = function(models) {
  //   StockUsers.hasMany(models.StockUsersData, {
  //     onDelete: "cascade"
  //   });
  // };
  return User;
};
