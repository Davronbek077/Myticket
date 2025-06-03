const Joi = require("joi");
const validateEvent = (event) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        photo: Joi.string().required(),
        start_date: Joi.string(),
        start_time: Joi.string().required(),
        finish_date: Joi.string().required(),
        finish_time: Joi.string().required(),
        info: Joi.string().required(),
        event_type_id: Joi.number().required(),
        human_category_id: Joi.number().required(),
        venue_id: Joi.number().required(),
        lang_id: Joi.number().required(),
        release_date: Joi.string().required(),
    });

    return schema.validate(event);
}

module.exports = {validateEvent};
