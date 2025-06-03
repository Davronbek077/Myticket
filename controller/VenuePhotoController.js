const { VenuePhoto, Venue } = require("../model");
const { validateVenuePhoto } = require("../validation/venuePhotoValidation");
const { Op } = require("sequelize");

exports.createVenuePhoto = async (req, res) => {
  const { error } = validateVenuePhoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venuePhoto = await VenuePhoto.create(req.body);
    res.status(201).send(venuePhoto);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenuePhoto = async (req, res) => {
  try {
    const venuePhoto = await VenuePhoto.findAll();
    res.status(200).send(venuePhoto);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenuePhotoById = async (req, res) => {
  try {
    const venuePhoto = await VenuePhoto.findByPk(req.params.id, {
      include: [
        {
          model: Venue,
          as: "venue",
        },
      ],
    });
    if (!venuePhoto) return res.status(404).send("Venue photo not found");
    res.status(200).send(venuePhoto);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateVenuePhoto = async (req, res) => {
  const { error } = validateVenuePhoto(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venuePhoto = await VenuePhoto.findByPk(req.params.id);
    if (!venuePhoto) return res.status(404).send("Venue photo not found");

    await venuePhoto.update(req.body);
    res.status(200).send(venuePhoto);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteVenuePhoto = async (req, res) => {
  try {
    const venuePhoto = await VenuePhoto.findByPk(req.params.id);
    if (!venuePhoto) return res.status(404).send("Venue photo not found");

    const venuePhotoData = venuePhoto.toJSON();
    await venuePhoto.destroy();
    res.status(200).send(venuePhotoData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.searchVenuePhoto = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const venuePhoto = await VenuePhoto.findAll({
      where: {
        url: {
          [Op.iLike]: `%${query}%`,
        },
      },
    });

    res.status(200).send(venuePhoto);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
