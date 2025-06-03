const Joi = require("joi");
const validateCartItem = (cartItem) => {
    const schema = Joi.object({
        ticket_id: Joi.number().required(),
        cart_id: Joi.number().required(),
        quantity: Joi.number().required(),
    });

    return schema.validate(cartItem);
}

module.exports = {validateCartItem};
