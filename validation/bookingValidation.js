const Joi = require("joi");
const validateBooking = (booking) => {
    const schema = Joi.object({
        cart_id: Joi.number().required(),
        createdAT: Joi.string().required(),
        fineshed: Joi.string().required(),
        payment_method_id: Joi.number().required(),
        delivery_method_id: Joi.number().required(),
    });

    return schema.validate(booking);
}

module.exports = {validateBooking};
