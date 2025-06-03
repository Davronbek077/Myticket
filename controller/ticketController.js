const { Ticket, Event, Seat } = require("../model");
const { validateTicket } = require("../validation/ticketValidation");
const { Op } = require("sequelize");

exports.createTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).send(ticket);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findAll();
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id,{
      include: [
        {
          model: Event,
          as: "events",
        },
        {
          model: Seat,
          as: "seats",
        },
       
      ],
    });
    if (!ticket) return res.status(404).send("Ticket not found");
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).send("Ticket not found");

    await ticket.update(req.body);
    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).send("Ticket not found");

    const ticketData = ticket.toJSON();
    await ticket.destroy();
    res.status(200).send(ticketData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTicket = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const ticket = await Ticket.findAll({
      where: {
        [Op.or]: [
          { price: { [Op.iLike]: `%${query}%` } },
          { service_fee: { [Op.iLike]: `%${query}%` } },
          
        ],
      },
    });

    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
