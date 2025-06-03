module.exports = (sequelize, DataTypes) => {
  const Cart_item = sequelize.define("Cart_item", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
    },
    cart_id: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
 
  Cart_item.associate = (models) => {
    Cart_item.belongsTo(models.Cart , {
      foreignKey: "cart_id",
      as: "carts",
    });
    Cart_item.belongsTo(models.Ticket, { 
          foreignKey: "ticket_id",
          as: "tickets",
    });
    
  }

  return Cart_item
};
