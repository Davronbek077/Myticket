module.exports = (sequelize, DataTypes) => {
  const Payment_method = sequelize.define("Payment_method", {
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
   Payment_method.associate = (models)=>{
     Payment_method.hasMany(models.Booking ,{
       foreignKey: "payment_method_id",
       as: "bookings",
     })}
  return Payment_method
};
