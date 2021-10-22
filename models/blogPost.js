module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Blog_Posts", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    medium_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
