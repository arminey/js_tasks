const BaseValidator = require('./base');

class AgeValidator extends BaseValidator {
  constructor () {
    super ();
  }
  validate (str) {
    if (!super.validate(str, validTypes.NUMBER)) {
      return false;
    }
    return (this._isNumber(str) && this.isInteger(str));
  }
}

module.exports = AgeValidator;
