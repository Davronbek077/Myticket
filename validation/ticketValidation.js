const Joi = require("joi");
const validateTicket = (ticket) => {
    const schema = Joi.object({
        event_id: Joi.number().required(),
        seat_id: Joi.number().required(),
        price: Joi.string().required(),
        service_fee: Joi.string().required(),
        ticket_type: Joi.string().required(),
    });

    return schema.validate(ticket);
}

module.exports = {validateTicket};
