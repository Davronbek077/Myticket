module.exports = (sequelize, DataTypes) => {
  const VenueType = sequelize.define(
    "VenueType",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
  );
  VenueType.associate = (models)=>{
    VenueType.hasMany(models.VenueVenueType ,{
      foreignKey: "venueTypeId",
      as: "venueVenueTypes",
    })}

  return VenueType;
};
