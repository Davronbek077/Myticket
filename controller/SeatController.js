const { Seat, Venue, SeatType } = require("../model");
const { validateSeat } = require("../validation/seatValidation");
const { Op } = require("sequelize");

exports.createSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seat = await Seat.create(req.body);
    res.status(201).send(seat);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getSeat = async (req, res) => {
  try {
    const seat = await Seat.findAll();
    res.status(200).send(seat);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getSeatById = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id,{
       
      
      include: [
        {
          model: Venue,
          as: "venues",
        },
        {
          model: SeatType,
          as: "seatTypes",
        },
       
      ],
        });
    if (!seat) return res.status(404).send("Seat not found");
    res.status(200).send(seat);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).send("Seat not found");

    await seat.update(req.body);
    res.status(200).send(seat);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).send("Seat not found");

    const seatData = seat.toJSON();
    await seat.destroy();
    res.status(200).send(seatData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.searchSeat = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const seat = await Seat.findAll({
      where: {
        number: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(seat);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
