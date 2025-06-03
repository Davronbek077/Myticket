module.exports = (sequelize, DataTypes) => {
    const Region = sequelize.define("Region", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    Region.associate = (models) => {
      Region.hasMany(models.District, {
        foreignKey: "regionId",
        as: "districts",
      });
      Region.hasMany(models.Venue, {
        foreignKey: "regionId",
        as: "venues",
      });
      Region.hasMany(models.Customer_address, {
        foreignKey: "region_id",
        as: "customer_address",
      });
    };
    return Region;
  };
  