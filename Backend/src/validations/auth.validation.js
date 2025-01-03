const Joi = require("joi");

const RegisterValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
  username: Joi.string().required(),
});

const LoginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  // _csrf: Joi.string(),
});

const LoginV2Validation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  deviceInfo: Joi.string().required(),
});
const RefreshTokenValidation = Joi.object({
  refreshToken: Joi.string().required(),
  deviceInfo: Joi.string().required(),
});

const getCurrentValidation = Joi.string().required();

module.exports = { RegisterValidation, LoginValidation, getCurrentValidation, LoginV2Validation, RefreshTokenValidation };
