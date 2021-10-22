const Subscribers = (sequelize, DataTypes) => {
  return sequelize.define("Subscribers", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};

module.exports = Subscribers;
