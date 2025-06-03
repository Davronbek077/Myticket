const Joi = require("joi");
const validateFlat = (flat) => {
    const schema = Joi.object({
        etaj: Joi.string().required(),
        condition: Joi.string().required(),
    });

    return schema.validate(flat);
}

module.exports = {validateFlat};
