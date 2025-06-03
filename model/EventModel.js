module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      start_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      finish_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      finish_time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      info: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      event_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
      },
      human_category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
      },
      venue_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    
      },
      lang_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
     
      },
      release_date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    Event.associate = (models) => {
      Event.belongsTo(models.EventType, {
        foreignKey: "event_type_id",
        as: "eventType",
      });
    
      Event.belongsTo(models.HumanCategory, {
        foreignKey: "human_category_id",
        as: "humans",
      });
    
      Event.belongsTo(models.Lang, {
        foreignKey: "lang_id",
        as: "langs",
      });
    
      Event.belongsTo(models.Venue, {
        foreignKey: "venue_id",
        as: "venues",
      });
    };
    
      return Event;
  };
  