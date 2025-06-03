module.exports = (sequelize, DataTypes) => {
    const Lang = sequelize.define("Lang", {
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
    Lang.associate = (models) => {
      Lang.hasMany(models.Event, {
        foreignKey: "lang_id",
        as: "events",
      });
      Lang.hasMany(models.Customer, {
        foreignKey: "lang_id",
        as: "customers",
      });
    };
    return Lang;
  };