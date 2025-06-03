module.exports = (sequelize, DataTypes) => {
    const HumanCategory = sequelize.define("HumanCategory", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_age: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      finish_age: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
    HumanCategory.associate = (models) => {
      HumanCategory.hasMany(models.Event, {
        foreignKey: "human_category_id",
        as: "events",
      });
    };
    return HumanCategory;
  };
  