const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  validationId: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string()
        .required()
        .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
    }),
  }),
};
