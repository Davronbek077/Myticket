module.exports = (sequelize, DataTypes) => {
  const Ticket_status = sequelize.define("Ticket_status", {
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
  
  return Ticket_status
};
