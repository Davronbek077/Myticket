const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./model")
const customerRoutes = require("./routes/customerRoute");
const customer_cardRoutes = require("./routes/customerCardRoute");
const customer_addressRoutes = require("./routes/customerAddressRoute");
const delivery_methodRoutes = require("./routes/delivery_methodRoutes");
const payment_methodRoutes = require("./routes/payment_methodRoutes");
const ticket_status = require("./routes/ticket_statusRoutes");
const status = require("./routes/statusRoutes");
const ticket = require("./routes/ticketRoutes");
const admin = require("./routes/adminRoutes");
const venue_type = require("./routes/VenueTypeRoute");
const lang = require("./routes/LangRoute");
const region = require("./routes/RegionRoute");
const district = require("./routes/DistrictRoute");
const venue = require("./routes/VenueRoute");
const venuevenuetype = require("./routes/VenueVenueTypeRoute");
const seatType = require("./routes/SeatTypeRoute");
const seat = require("./routes/SeatRoute");
const humanCategory = require("./routes/HumanCategoryRoute");
const eventType = require("./routes/EventTypeRoute");
const event = require("./routes/EventRoute");
const discount = require("./routes/discountRoutes");
const booking = require("./routes/bookingRoutes");
const flat = require("./routes/flatRoutes");
const sector = require("./routes/sectorRoutes");
const User = require("./routes/userRoute")
const cart = require("./routes/cartRoutes");
const cart_item = require("./routes/cart_itemRoutes");
const country = require("./routes/countryRoutes");
const venuePhoto = require("./routes/venuePhotoRoute")
const gender = require("./routes/genderRoutes");
const setupSwagger = require("./swagger/swagger")
const cors = require("cors")
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
)

app.use("/api", customerRoutes);
app.use("/api", delivery_methodRoutes);
app.use("/api", payment_methodRoutes);
app.use("/api", admin);
app.use("/api", venue_type);
app.use("/api", lang);
app.use("/api", region);
app.use("/api", district);
app.use("/api", venue);
app.use("/api", venuevenuetype);
app.use("/api", seatType);
app.use("/api", seat);
app.use("/api", humanCategory);
app.use("/api", eventType);
app.use("/api", event);
app.use("/api", booking);
app.use("/api", customer_cardRoutes);
app.use("/api", customer_addressRoutes);
app.use("/api", ticket_status);
app.use("/api", status);
app.use("/api", ticket);
app.use("/api", cart);
app.use("/api", discount);
app.use("/api", cart_item);
app.use("/api", flat);
app.use("/api", sector);
app.use("/api", country);
app.use("/api", gender);
app.use("/api", User);
app.use("/api", venuePhoto);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
  })
});
