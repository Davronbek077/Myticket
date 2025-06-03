module.exports = (sequelize, DataTypes) => {
  const Delivery_method = sequelize.define("Delivery_method", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
  Delivery_method.associate = (models) => {
    Delivery_method.hasMany(models.Booking, {
      foreignKey: "delivery_method_id",
      as: "bookings",
    })}
  return Delivery_method
};
