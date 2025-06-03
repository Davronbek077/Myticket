const Joi = require("joi");
const validateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        customer_id: Joi.number().required(),
    });

    return schema.validate(user);
}

module.exports = {validateUser};
