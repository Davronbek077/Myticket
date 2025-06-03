const { Booking, Cart, Payment_method, Delivery_method } = require("../model");
const { validateBooking } = require("../validation/bookingValidation");
const { Op } = require("sequelize");

exports.createBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const booking = await Booking.create(req.body);
    res.status(201).send(booking);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findAll();
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id,{
          include: [
            {
              model: Cart,
              as: "carts",
            },
            {
              model: Payment_method,
              as: "payment_methods",
            },
            {
              model: Delivery_method,
              as: "delivery_methods",
            },
          ],
        });
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).send("Booking not found");

    await booking.update(req.body);
    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).send("Booking not found");

    const bookingData = booking.toJSON();
    await booking.destroy();
    res.status(200).send(bookingData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchBooking = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const booking = await Booking.findAll({
      where: {
        [Op.or]: [
          { fineshed: { [Op.iLike]: `%${query}%` } },
          { createdAT: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });

    res.status(200).send(booking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
