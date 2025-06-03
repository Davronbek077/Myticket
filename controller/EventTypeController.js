const { EventType } = require("../model");
const { validateEventType } = require("../validation/eventTypeValidation");
const { Op } = require("sequelize");

exports.createEventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const eventType = await EventType.create(req.body);
    res.status(201).send(eventType);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getEventType = async (req, res) => {
  try {
    const eventType = await EventType.findAll();
    res.status(200).send(eventType);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getEventTypeById = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id);
    if (!eventType) return res.status(404).send("Event type not found");
    res.status(200).send(eventType);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateEventType = async (req, res) => {
  const { error } = validateEventType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const eventType = await EventType.findByPk(req.params.id);
    if (!eventType) return res.status(404).send("Event type not found");

    await eventType.update(req.body);
    res.status(200).send(eventType);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteEventType = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id);
    if (!eventType) return res.status(404).send("Event type not found");

    const eventTypeData = eventType.toJSON();
    await eventType.destroy();
    res.status(200).send(eventTypeData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.searchEventType = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const eventType = await EventType.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(eventType);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
