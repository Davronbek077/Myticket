const { Payment_method } = require("../model");
const { validatePaymentMethod } = require("../validation/paymentMethodValidation");
const { Op } = require("sequelize");

exports.createPaymentMethod = async (req, res) => {
  const { error } = validatePaymentMethod(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const payment_method = await Payment_method.create(req.body);
    res.status(201).send(payment_method);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPaymentMethod = async (req, res) => {
  try {
    const payment_method = await Payment_method.findAll();
    res.status(200).send(payment_method);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

exports.getPaymentMethodById = async (req, res) => {
  try {
    const payment_method = await Payment_method.findByPk(req.params.id);
    if (!payment_method) return res.status(404).send("Payment method not found");
    res.status(200).send(payment_method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updatePaymentMethod = async (req, res) => {
  const { error } = validatePaymentMethod(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const payment_method = await Payment_method.findByPk(req.params.id);
    if (!payment_method) return res.status(404).send("Payment_method not found");

    await payment_method.update(req.body);
    res.status(200).send(payment_method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deletePaymentMethod = async (req, res) => {
  try {
    const payment_method = await Payment_method.findByPk(req.params.id);
    if (!payment_method) return res.status(404).send("Payment method not found");

    const paymentMethodData = payment_method.toJSON();
    await payment_method.destroy();
    res.status(200).send(paymentMethodData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchPaymentMethod = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const payment_method = await Payment_method.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          
        ],
      },
    });

    res.status(200).send(payment_method);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
