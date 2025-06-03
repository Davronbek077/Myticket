const Joi = require("joi");
const validateCart = (cart) => {
    const schema = Joi.object({
        customer_id: Joi.number().required(),
        createdAT: Joi.string().required(),
        fineshedAT: Joi.string().required(),
    });

    return schema.validate(cart);
}

module.exports = {validateCart};
