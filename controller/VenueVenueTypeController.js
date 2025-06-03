const { VenueVenueType, VenueType, Venue } = require("../model");
const { validateVenueVenueType } = require("../validation/venueVenueTypeValidation");

exports.createVenueVenueType = async (req, res) => {
  const { error } = validateVenueVenueType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venueVenueType = await VenueVenueType.create(req.body);
    res.status(201).send(venueVenueType);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenueVenueType = async (req, res) => {
  try {
    const venueVenueType = await VenueVenueType.findAll();
    res.status(200).send(venueVenueType);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenueVenueTypeById = async (req, res) => {
  try {
    const venueVenueType = await VenueVenueType.findByPk(req.params.id,{
           
          
          include: [
            {
              model: VenueType,
              as: "venueType",
            },
            {
              model: Venue,
              as: "venue",
            },
           
          ],
            });
    if (!venueVenueType) return res.status(404).send("VenueVenueType not found");
    res.status(200).send(venueVenueType);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateVenueVenueType = async (req, res) => {
  const { error } = validateVenueVenueType(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venueVenueType = await VenueVenueType.findByPk(req.params.id);
    if (!venueVenueType) return res.status(404).send("VenueVenueType not found");

    await venueVenueType.update(req.body);
    res.status(200).send(venueVenueType);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteVenueVenueType = async (req, res) => {
  try {
    const venueVenueType = await VenueVenueType.findByPk(req.params.id);
    if (!venueVenueType) return res.status(404).send("Venue-VenueType not found");

    await venueVenueType.destroy();
    res.status(200).send("VenueVenueType deleted");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
