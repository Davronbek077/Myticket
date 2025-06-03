const Joi = require("joi");
const validateSeatType = (seatType) => {
    const schema = Joi.object({
        name: Joi.string().required(),
    });

    return schema.validate(seatType);
}

module.exports = {validateSeatType};
