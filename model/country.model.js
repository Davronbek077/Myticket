module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define("Country", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,    
    },

  });

  Country.associate = (models) => {
    Country.hasMany(models.Customer_address, {
      foreignKey: "country_id",
      as: "customer_address",
    });
  };
  
  return Country
};
