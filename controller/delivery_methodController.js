const { Delivery_method } = require("../model");
const { validateDeliveryMethod } = require("../validation/deliveryMethodValidation");
const { Op } = require("sequelize");

exports.createDelivery_method = async (req, res) => {
  const { error } = validateDeliveryMethod(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const delivery_method = await Delivery_method.create(req.body);
    res.status(201).send(delivery_method);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDelivery_method = async (req, res) => {
  try {
    const delivery_method = await Delivery_method.findAll();
    res.status(200).send(delivery_method);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

exports.getDelivery_methodById = async (req, res) => {
  try {
    const delivery_method = await Delivery_method.findByPk(req.params.id);
    if (!delivery_method) return res.status(404).send("Delivery method not found");
    res.status(200).send(delivery_method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDelivery_method = async (req, res) => {
  const { error } = validateDeliveryMethod(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const delivery_method = await Delivery_method.findByPk(req.params.id);
    if (!delivery_method) return res.status(404).send("Delivery method not found");

    await delivery_method.update(req.body);
    res.status(200).send(delivery_method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDelivery_method = async (req, res) => {
  try {
    const delivery_method = await Delivery_method.findByPk(req.params.id);
    if (!delivery_method) return res.status(404).send("Delivery method not found");

    const userData = delivery_method.toJSON();
    await delivery_method.destroy();
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchDelivery_method = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const delivery_method = await Delivery_method.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          
        ],
      },
    });

    res.status(200).send(delivery_method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
