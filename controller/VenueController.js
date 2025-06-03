const { Venue, District, Region } = require("../model");
const { validateVenue } = require("../validation/venueValidation");
const { Op } = require("sequelize");

exports.createVenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue = await Venue.create(req.body);
    res.status(201).send(venue);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenue = async (req, res) => {
  try {
    const venue = await Venue.findAll();
    res.status(200).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getVenueById = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id,{
       
      
      include: [
        {
          model: District,
          as: "districts",
        },
        {
          model: Region,
          as: "regions",
        },
       
      ],
        });
    if (!venue) return res.status(404).send("Venue not found");
    res.status(200).send(venue);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateVenue = async (req, res) => {
  const { error } = validateVenue(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).send("Venue not found");

    await venue.update(req.body);
    res.status(200).send(venue);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteVenue = async (req, res) => {
  try {
    const venue = await Venue.findByPk(req.params.id);
    if (!venue) return res.status(404).send("Venue not found");

    const venueData = venue.toJSON();
    await venue.destroy();
    res.status(200).send(venueData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.searchVenue = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const venue = await Venue.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(venue);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
