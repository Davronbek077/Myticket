const Joi = require("joi");
const validateCustomerAddress = (customerAddress) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer(),
        name: Joi.string().required(),
        country_id: Joi.number().integer(),
        region_id: Joi.number().integer(),
        district_id: Joi.number().integer(),
        street: Joi.string().required(),
        house: Joi.string().required(),
        flat: Joi.number().required(),
        location: Joi.string().required(),
        post_index: Joi.string().required(),
        info: Joi.string().required(),
    });

    return schema.validate(customerAddress);
}

module.exports = {validateCustomerAddress};
