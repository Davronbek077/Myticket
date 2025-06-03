const Joi = require("joi");
const validateCustomerCard = (customerCard) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer(),
        name: Joi.string().required(),
        phone: Joi.string().required(),
        number: Joi.string().required(),
        month: Joi.string().required(),
        year: Joi.string().required(),
        is_active: Joi.boolean().required(),
        is_man: Joi.boolean().required(),
    });

    return schema.validate(customerCard);
}

module.exports = {validateCustomerCard};
