module.exports = (sequelize, DataTypes) => {
    const EventType = sequelize.define("EventType", {
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
    EventType.associate = (models) => {
        EventType.hasMany(models.Event, {
          foreignKey: "event_type_id",
          as: "events",
        });
      };
    return EventType;
  };
  