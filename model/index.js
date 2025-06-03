const  Sequelize  = require('sequelize');
const sequelize = require("../config/database");

const VenueType = require("./VenueTypeModel")(sequelize, Sequelize);
const VenueVenueType = require("./VenueVenueTypeModel")(sequelize, Sequelize);
const Lang = require("./LangModel")(sequelize, Sequelize);
const Region = require("./RegionModel")(sequelize, Sequelize);
const Venue = require("./VenueModel")(sequelize, Sequelize);
const District = require("./DistrictModel")(sequelize, Sequelize);
const HumanCategory = require("./HumanCategoryModel")(sequelize, Sequelize);
const EventType = require("./EventTypeModel")(sequelize, Sequelize);
const SeatType = require("./SeatTypeModel")(sequelize, Sequelize);
const Seat = require("./SeatModel")(sequelize, Sequelize);
const Event = require("./EventModel")(sequelize, Sequelize);
const Admin = require("./admin.model")(sequelize, Sequelize);
const Booking = require("./booking.model")(sequelize, Sequelize);
const Ticket_status = require("./ticket_status.model")(sequelize, Sequelize);
const Ticket = require("./ticket.model")(sequelize, Sequelize);
const Delivery_method = require("./delivery_method.model")(sequelize, Sequelize);
const Payment_method = require("./payment_method.model")(sequelize, Sequelize);
const Customer = require("./customer.model")(sequelize, Sequelize);
const Customer_address = require("./customer_address.model")(sequelize, Sequelize);
const Customer_card = require("./customer_card.model")(sequelize, Sequelize);
const Cart = require("./cart.model")(sequelize, Sequelize);
const Cart_item = require("./cart_item.model")(sequelize, Sequelize);
const Discount = require("./discount.model")(sequelize, Sequelize);
const Flat = require("./flat.model")(sequelize, Sequelize);
const Sector = require("./sector.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);
const Status = require("./status.model")(sequelize, Sequelize);
const User = require("./user.model")(sequelize, Sequelize);
const VenuePhoto = require("./VenuePhotoModel")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
Region.associate(sequelize.models);
District.associate(sequelize.models);
Venue.associate(sequelize.models);
VenueType.associate(sequelize.models);
VenuePhoto.associate(sequelize.models);
VenueVenueType.associate(sequelize.models);
SeatType.associate(sequelize.models);
Seat.associate(sequelize.models);
Event.associate(sequelize.models);
Lang.associate(sequelize.models);
HumanCategory.associate(sequelize.models);
EventType.associate(sequelize.models);
Customer_address.associate(sequelize.models);
Customer.associate(sequelize.models);
Customer_card.associate(sequelize.models);
Cart.associate(sequelize.models);
Cart_item.associate(sequelize.models);
Booking.associate(sequelize.models);
Payment_method.associate(sequelize.models);
Ticket.associate(sequelize.models);
Delivery_method.associate(sequelize.models);
Flat.associate(sequelize.models);
User.associate(sequelize.models);
Gender.associate(sequelize.models);

module.exports = { 
  VenueType, 
  VenueVenueType, 
  VenuePhoto, 
  User,
  Lang, 
  Region, 
  Venue, 
  District, 
  HumanCategory, 
  EventType, 
  SeatType, 
  Seat,
  Event,
  sequelize ,
  Admin,
  Booking,
  Delivery_method,
  Ticket_status,
  Ticket,
  Payment_method,
  Customer,
  Customer_address,
  Customer_card,
  Cart,
  Cart_item,
  Discount,
  Flat,
  Sector,
  Country,
  Status,
  Gender,
};
