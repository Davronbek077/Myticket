const { Event, EventType, HumanCategory, Lang, Venue } = require("../model");
const { validateEvent } = require("../validation/eventValidation");
const { Op } = require("sequelize");

exports.createEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event = await Event.create(req.body);
    res.status(201).send(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findAll();
    res.status(200).send(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id,{
              include: [
                {
                  model: EventType,
                  as: "eventType",
                },
                {
                  model: HumanCategory,
                  as: "humans",
                },
                {
                  model: Lang,
                  as: "langs",
                },
                {
                  model: Venue,
                  as: "venues",
                },
              ],
            });
    if (!event) return res.status(404).send("Event not found");
    res.status(200).send(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).send("Event not found");

    await event.update(req.body);
    res.status(200).send(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).send("Event not found");

    const eventData = event.toJSON();
    await event.destroy();
    res.status(200).send(eventData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.searchEvent = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const event = await Event.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
