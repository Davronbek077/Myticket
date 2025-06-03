
const { Cart_item, Cart, Ticket } = require("../model");
const { validateCartItem } = require("../validation/cartItemValidation");
const { Op } = require("sequelize");

exports.createCartItem = async (req, res) => {
  const { error } = validateCartItem(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cart_item = await Cart_item.create(req.body);
    res.status(201).send(cart_item);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCartItem = async (req, res) => {
  try {
    const cart_item = await Cart_item.findAll();
    res.status(200).send(cart_item);
  } catch (error) {
    res.status(500).send(err.message);
  }
};

exports.getCartItemById = async (req, res) => {
  try {
    const cart_item = await Cart_item.findByPk(req.params.id,{
          include: [
       
            {
              model: Cart,
              as: "carts",
            },
            {
              model: Ticket,
              as: "tickets",
            },
          ],
        });
    if (!cart_item) return res.status(404).send("Cart item not found");
    res.status(200).send(cart_item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCartItem = async (req, res) => {
  const { error } = validateCartItem(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const cart_item = await Cart_item.findByPk(req.params.id);
    if (!cart_item) return res.status(404).send("Cart item not found");

    await cart_item.update(req.body);
    res.status(200).send(cart_item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const cart_item = await Cart_item.findByPk(req.params.id);
    if (!cart_item) return res.status(404).send("Cart item not found");

    const cartItemData = cart_item.toJSON();
    await cart_item.destroy();
    res.status(200).send(cartItemData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchCartItem = async (req, res) => {
  try {
    console.log("Query received:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const cart_item = await Cart_item.findAll({
      where: {
        [Op.or]: [
          { quantity: { [Op.iLike]: `%${query}%` } },
          
        ],
      },
    });

    res.status(200).send(cart_item);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
