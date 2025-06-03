const Joi = require("joi");
const validateDistrict = (district) => {
    const schema = Joi.object({
        regionId: Joi.number().required(),
        name: Joi.string().required(),
    });

    return schema.validate(district);
}

module.exports = {validateDistrict};
