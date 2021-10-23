const Announcement = (sequelize, DataTypes) =>
  sequelize.define("Announcement", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(500),
    },
    content: {
      type: DataTypes.TEXT("long"),
    },
  });

module.exports = Announcement;
