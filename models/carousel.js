const Carousel = (sequelize, DataTypes) =>
  sequelize.define("Carousel", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING(255),
      unique: true,
    },
  });

module.exports = Carousel;
