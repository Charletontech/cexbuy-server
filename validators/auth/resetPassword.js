const Joi = require("joi");
const ErrorResponse = require("../../utils/errorResponse");

const schema = Joi.object({
  token: Joi.string().alphanum().length(6).required(),
  password: Joi.string().min(8).max(30).required(),
  passwordConfirmation: Joi.any().valid(Joi.ref('password')).required()
}).options({ stripUnknown: true });

const validateResetPasswordObj = async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    req.body = value;
    return next();
  } catch (err) {
    return next(new ErrorResponse(err.message.replace(/[\\"]/gi, ""), 400));
  }
};

module.exports = validateResetPasswordObj;
