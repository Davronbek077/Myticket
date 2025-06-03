const { Sector } = require("../model");
const { validateSector } = require("../validation/sectorValidation");
const { Op } = require("sequelize");

exports.createSector = async (req, res) => {
  const { error } = validateSector(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const sector = await Sector.create(req.body);
    res.status(201).send(sector);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSector = async (req, res) => {
  try {
    const sector = await Sector.findAll();
    res.status(200).send(sector);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

exports.getSectorById = async (req, res) => {
  try {
    const sector = await Sector.findByPk(req.params.id);
    if (!sector) return res.status(404).send("Sector not found");
    res.status(200).send(sector);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateSector = async (req, res) => {
  const { error } = validateSector(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const sector = await Sector.findByPk(req.params.id);
    if (!sector) return res.status(404).send("Sector not found");

    await sector.update(req.body);
    res.status(200).send(sector);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteSector = async (req, res) => {
  try {
    const sector = await Sector.findByPk(req.params.id);
    if (!sector) return res.status(404).send("Sector not found");

    const sectorData = sector.toJSON();
    await sector.destroy();
    res.status(200).send(sectorData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchSector = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const sector = await Sector.findAll({
      where: {
        [Op.or]: [
          { sector_name: { [Op.iLike]: `%${query}%` } },
          
        ],
      },
    });

    res.status(200).send(sector);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
