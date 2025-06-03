const Joi = require("joi");
const validateVenue = (venue) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required(),
        location: Joi.string().required(),
        site: Joi.string().required(),
        phone: Joi.string().required(),
        schema: Joi.object().required(),
        regionId: Joi.number().required(),
        districtId: Joi.number().required(),
    });

    return schema.validate(venue);
}

module.exports = {validateVenue};
