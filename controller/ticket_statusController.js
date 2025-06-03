const { Ticket_status } = require("../model");
const { validateTicketStatus } = require("../validation/ticketStatusValidation");
const { Op } = require("sequelize");

exports.createTicketStatus = async (req, res) => {
  const { error } = validateTicketStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket_status = await Ticket_status.create(req.body);
    res.status(201).send(ticket_status);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTicketStatus = async (req, res) => {
  try {
    const ticket_status = await Ticket_status.findAll();
    res.status(200).send(ticket_status);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

exports.getTicketStatusById = async (req, res) => {
  try {
    const ticket_status = await Ticket_status.findByPk(req.params.id);
    if (!ticket_status) return res.status(404).send("Ticket status not found");
    res.status(200).send(ticket_status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateTicketStatus = async (req, res) => {
  const { error } = validateTicketStatus(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket_status = await Ticket_status.findByPk(req.params.id);
    if (!ticket_status) return res.status(404).send("Ticket status not found");

    await ticket_status.update(req.body);
    res.status(200).send(ticket_status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteTicketStatus = async (req, res) => {
  try {
    const ticket_status = await Ticket_status.findByPk(req.params.id);
    if (!ticket_status) return res.status(404).send("Ticket status not found");

    const ticketStatusData = ticket_status.toJSON();
    await ticket_status.destroy();
    res.status(200).send(ticketStatusData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchTicketStatus = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const ticket_status = await Ticket_status.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          
        ],
      },
    });

    res.status(200).send(ticket_status);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
