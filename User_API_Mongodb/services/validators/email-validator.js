const BaseValidator = require('./base');

class EmailValidator extends BaseValidator {
  constructor () {
    super ();
  }
  validate (str) {
    if (!super.validate(str, validTypes.EMAIL)) {
      return false;
    }
    _isEmail(str) {
      let reg = /^([\w-\.]+@[\w\.]+\.{1}[\w]+)$/;
      return reg.test(str);
    }
  }
}

module.exports = EmailValidator;
