module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
    },
    createdAT: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fineshedAT: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customers",
    });
    Cart.hasMany(models.Cart_item, {
      foreignKey: "cart_id",
      as: "carts",
    });
    Cart.hasMany(models.Booking, {
      foreignKey: "cart_id",
      as: "bookings",
    });
  };

  return Cart;
};
