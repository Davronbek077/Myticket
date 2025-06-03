module.exports = (sequelize, DataTypes) => {
    const SeatType = sequelize.define("SeatType", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    SeatType.associate = (models) => {
        SeatType.hasMany(models.Seat, {
          foreignKey: "seatTypeId",
          as: "seats",
        });
    };
    return SeatType;
  };
  