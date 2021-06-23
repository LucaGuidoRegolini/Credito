const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  validationNum: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().required(),
    }),
  }),

  validationOffers: celebrate({
    [Segments.BODY]: Joi.object().keys({
      min_score: Joi.number().integer(),
      max_loan: Joi.number().integer(),
      interest_rate: Joi.number().integer(),
      financial_agency: Joi.string(),
    }),
  }),

  validationSale: celebrate({
    [Segments.BODY]: Joi.object().keys({
      ID_client: Joi.string()
        .required()
        .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
      id: Joi.number().integer(),
      parcels: Joi.number().integer(),
    }),
  }),

  validationId: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string()
        .required()
        .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
    }),
  }),
};
