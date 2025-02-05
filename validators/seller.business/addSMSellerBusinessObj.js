
const Joi = require("joi");
const ErrorResponse = require("../../utils/errorResponse");


const schema = Joi.object({
  sellerBusinessId: Joi.string().guid().required(),
  shippingId: Joi.array().required(),
}).options({ stripUnknown: true });

const validateAddSMSellerBusinessObj = async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    req.body = value;
    return next();
  } catch (err) {
    return next(new ErrorResponse(err.message.replace(/[\\"]/gi, ""), 400));
  }
};

module.exports = validateAddSMSellerBusinessObj;