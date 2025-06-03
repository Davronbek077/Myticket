const { Cart, Customer } = require("../model");
const { validateCart } = require("../validation/cartValidation");
const { Op } = require("sequelize");

exports.createCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cart = await Cart.create(req.body);
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findAll();
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id,{
          include: [
            {
              model: Customer,
              as: "customers",
            },
          ],
        });
    if (!cart) return res.status(404).send("Cart not found");
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCart = async (req, res) => {
  const { error } = validateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).send("Cart not found");

    await cart.update(req.body);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).send("Cart not found");

    const cartData = cart.toJSON();
    await cart.destroy();
    res.status(200).send(cartData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCart = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const cart = await Cart.findAll({
      where: {
        [Op.or]: [
          { createdAT: { [Op.iLike]: `%${query}%` } },
          { fineshedAT: { [Op.iLike]: `%${query}%` } },
          
        ],
      },
    });

    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
