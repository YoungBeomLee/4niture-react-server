module.exports = (sequelize, DataTypes) => {
    const banners = sequelize.define("Banners", {
      imageUrl: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      href: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
    });
    return banners;
  };
    