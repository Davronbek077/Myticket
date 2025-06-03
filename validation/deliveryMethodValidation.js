const Joi = require("joi");
const validateDeliveryMethod = (deliveryMethod) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    });

    return schema.validate(deliveryMethod);
}

module.exports = {validateDeliveryMethod};
