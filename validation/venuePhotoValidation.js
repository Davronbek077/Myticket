const Joi = require("joi");
const validateVenuePhoto = (venuePhoto) => {
    const schema = Joi.object({
        venueId: Joi.number().required(),
        url: Joi.string().required(),
    });

    return schema.validate(venuePhoto);
}

module.exports = {validateVenuePhoto};
