module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
    },
    createdAT: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fineshed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
    
    },
    delivery_method_id: {
      type: DataTypes.INTEGER,
   
    },
  });
 
  Booking.associate = (models) => {
    Booking.belongsTo(models.Cart , {
      foreignKey: "cart_id",
      as: "carts",
    });
    Booking.belongsTo(models.Payment_method, { 
          foreignKey: "payment_method_id",
          as: "payment_methods",
    });
    Booking.belongsTo(models.Delivery_method, {  
          foreignKey: "delivery_method_id",
          as: "delivery_methods",
    });
  }

  return Booking
};
