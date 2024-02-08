const Joi = require("joi");

const Schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phoneNumber: Joi.number().required(),
});

const userValidation = (req, res, next) => {
  const { error } = Schema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
  } else {
    next();
  }
};

module.exports = { userValidation };
