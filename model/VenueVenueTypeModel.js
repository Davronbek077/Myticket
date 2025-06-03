module.exports = (sequelize, DataTypes) => {
  const VenueVenueType = sequelize.define("VenueVenueType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    venueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    venueTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  VenueVenueType.associate = (models) => {
    VenueVenueType.belongsTo(models.Venue, {
      foreignKey: "venueId",
      as: "venue",
    });
    VenueVenueType.belongsTo(models.VenueType, {
      foreignKey: "venueTypeId",
      as: "venueType",
    });
  };

  return VenueVenueType;
};
