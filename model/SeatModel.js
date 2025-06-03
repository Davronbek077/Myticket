module.exports = (sequelize, DataTypes) => {
    const Seat = sequelize.define("Seat", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sector: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rowNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      venueId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seatTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      locationInSchema: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    Seat.associate = (models) => {
      Seat.belongsTo(models.Venue, {
        foreignKey: "venueId",
        as: "venues",
      });
      Seat.belongsTo(models.SeatType, {
        foreignKey: "seatTypeId",
        as: "seatTypes",
      });
    };
    return Seat;
  };
  