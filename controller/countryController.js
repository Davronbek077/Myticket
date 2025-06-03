const { Country } = require("../model");
const { validateCountry } = require("../validation/countryValidation");
const { Op } = require("sequelize");

exports.createCountry = async (req, res) => {
  const { error } = validateCountry(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const country = await Country.create(req.body);
    res.status(201).send(country);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCountry = async (req, res) => {
  try {
    const country = await Country.findAll();
    res.status(200).send(country);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCountryById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).send("Country not found");
    res.status(200).send(country);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCountry = async (req, res) => {
  const { error } = validateCountry(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).send("Country not found");

    await country.update(req.body);
    res.status(200).send(country);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCountry = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).send("Country not found");

    const countryData = country.toJSON();
    await country.destroy();
    res.status(200).send(countryData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCountry = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const country = await Country.findAll({
      where: {
        [Op.or]: [
          { country: { [Op.iLike]: `%${query}%` } },
          
        ],
      },
    });

    res.status(200).send(country);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
