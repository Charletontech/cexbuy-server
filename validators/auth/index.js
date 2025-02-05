module.exports = {
  validateRegisterObj: require("./registerObj"),
  validateLoginObj: require("./loginObj"),
  validatePasswordObj: require("./changePassword"),
  validateVerifyObj: require("./verifyUser"),
  validateResendOTPObj: require("./resendOTP"),
  validateAddPhoneObj: require("./addPhone"),
  validateForgotPasswordObj: require("./forgotPassword"),
  validateResetPasswordObj: require("./resetPassword"),
  validateReferralObj: require("./referral"),
  validateReferralGetObj: require("./getReferral"),
  validateAddPinObj: require("./addTransactionPin"),
  validateChangePinObj: require("./changeTransactionPin"),
  validateResetPinObj: require("./resetTransactionPin"),
  validateLogin2FAObj: require("./login2FA"),
};
