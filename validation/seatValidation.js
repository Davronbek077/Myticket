const Joi = require("joi");
const validateSeat = (seat) => {
    const schema = Joi.object({
        sector: Joi.string().required(),
        rowNumber: Joi.string().required(),
        number: Joi.string().required(),
        venueId: Joi.number().required(),
        seatTypeId: Joi.number().required(),
        locationInSchema: Joi.string().required(),
    });

    return schema.validate(seat);
}

module.exports = {validateSeat};
