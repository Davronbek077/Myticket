module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define("Venue", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
      },
      site: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      schema: {
        type: DataTypes.JSON, 
      },
      regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      districtId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    Venue.associate = (models) => {
      Venue.belongsTo(models.Region, {
        foreignKey: "regionId",
        as: "regions",
      });
      Venue.belongsTo(models.District, {
        foreignKey: "districtId",
        as: "districts",
      });
      Venue.hasMany(models.VenueVenueType, {
        foreignKey: "venueId",
        as: "venueVenueTypes",
      });
      Venue.hasMany(models.VenuePhoto, {
        foreignKey: 'venueId',
        as: 'photos' 
      });
      Venue.hasMany(models.Event, {
        foreignKey: 'venue_id',
        as: 'events ' 
      });
      Venue.hasMany(models.Seat, {
        foreignKey: 'venueId',
        as: 'seats'
        
      });
    };
  
    return Venue;
  };
  