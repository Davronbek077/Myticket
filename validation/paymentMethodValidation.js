const Joi = require("joi");
const validatePaymentMethod = (paymentMethod) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    });

    return schema.validate(paymentMethod);
}

module.exports = {validatePaymentMethod};
