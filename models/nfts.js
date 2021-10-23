const Nfts = (sequelize, DataTypes) => {
  return sequelize.define("Nfts", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    link: {
      type: DataTypes.STRING(500),
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
  });
};

module.exports = Nfts;
