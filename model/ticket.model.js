module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("Ticket", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      
    },
    seat_id: {
      type: DataTypes.INTEGER,
      
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    service_fee: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticket_type: {
      type: DataTypes.STRING,
      
    },
  });
  Ticket.associate = (models)=>{
    Ticket.belongsTo(models.Event ,{
      foreignKey: "event_id",
      as: "events",
    })
    Ticket.belongsTo(models.Seat ,{
      foreignKey: "seat_id",
      as: "seats",
    })
  
   
    Ticket.hasMany(models.Cart_item, {
      foreignKey: "ticket_id",
      as: "tickets",
    });
  }
  return Ticket
};
