const { Lang } = require("../model");
const { validateLang } = require("../validation/langValidation");
const { Op } = require("sequelize");

exports.createLang = async (req, res) => {
  const { error } = validateLang(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const lang = await Lang.create(req.body);
    res.status(201).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLang = async (req, res) => {
  try {
    const lang = await Lang.findAll();
    res.status(200).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getLangById = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) return res.status(404).send("Language not found");
    res.status(200).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateLang = async (req, res) => {
  const { error } = validateLang(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) return res.status(404).send("Language not found");

    await lang.update(req.body);
    res.status(200).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteLang = async (req, res) => {
  try {
    const lang = await Lang.findByPk(req.params.id);
    if (!lang) return res.status(404).send("Language not found");

    const langData = lang.toJSON();
    await lang.destroy();
    res.status(200).send(langData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchLang = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).send("Search query is required");

    const lang = await Lang.findAll({
      where: {
        name: {
          [Op.iLike]: `%${query}%`
        }
      }
    });

    res.status(200).send(lang);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
