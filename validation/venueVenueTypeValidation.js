const Joi = require("joi");
const validateVenueVenueType = (venueVenueType) => {
    const schema = Joi.object({
        venueId: Joi.number().required(),
        venueTypeId: Joi.number().required(),
    });

    return schema.validate(venueVenueType);
}

module.exports = {validateVenueVenueType};
