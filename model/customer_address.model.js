module.exports = (sequelize, DataTypes) => {
  const Customer_address = sequelize.define("Customer_address", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country_id: {
      type: DataTypes.INTEGER,
    },
    region_id: {
      type: DataTypes.INTEGER,
    },
    district_id: {
      type: DataTypes.INTEGER,
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    house: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flat: {
      type: DataTypes.INTEGER,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_index: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   

  });
 
  Customer_address.associate = (models) => {
    Customer_address.belongsTo(models.Customer , {
      foreignKey: "customer_id",
      as: "customers",
    });
    Customer_address.belongsTo(models.Flat , {
      foreignKey: "flat",
      as: "flats",
    });
    Customer_address.belongsTo(models.Country, {
      foreignKey: "country_id",
      as: "countrys",
    });
    Customer_address.belongsTo(models.Region , {
      foreignKey: "region_id",
      as: "regions",
    });
    Customer_address.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "districts",
    });
  
  }

  return Customer_address
};
