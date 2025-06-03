module.exports = (sequelize, DataTypes) => {
    const District = sequelize.define("District", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    District.associate = (models) => {
      District.belongsTo(models.Region, {
        foreignKey: "regionId",
        as: "region",
      });
      District.hasMany(models.Venue, {
        foreignKey: "districtId",
        as: "venues",
      });
      District.hasMany(models.Customer_address, {
        foreignKey: "district_id",
        as: "customer_address",
      });
    };
  
    return District;
  };
