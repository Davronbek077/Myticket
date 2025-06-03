const { Discount } = require("../model");
const { validateDiscount } = require("../validation/discountValidation");
const { Op } = require("sequelize");

exports.createDiscount = async (req, res) => {
  const { error } = validateDiscount(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const discount = await Discount.create(req.body);
    res.status(201).send(discount);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDiscount = async (req, res) => {
  try {
    const discount = await Discount.findAll();
    res.status(200).send(discount);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

exports.getDiscountById = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).send("Discount not found");
    res.status(200).send(discount);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDiscount = async (req, res) => {
  const { error } = validateDiscount(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).send("Discount not found");

    await discount.update(req.body);
    res.status(200).send(discount);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDiscount = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).send("Discount not found");

    const discountData = discount.toJSON();
    await discount.destroy();
    res.status(200).send(discountData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchDiscount = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const discount = await Discount.findAll({
      where: {
        [Op.or]: [
          { discount: { [Op.iLike]: `%${query}%` } },
          
        ],
      },
    });

    res.status(200).send(discount);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
