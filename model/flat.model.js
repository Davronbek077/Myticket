module.exports = (sequelize, DataTypes) => {
  const Flat = sequelize.define("Flat", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    etaj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
  Flat.associate = (models) => {
  Flat.hasMany(models.Customer_address, {
    foreignKey: "flat",
    as: "customer_addresss",
  });}
  return Flat
};
