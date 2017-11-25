
const Utility = require('./../utility');

// const ErrorType = require('./../../settings/error-type');

const validTypes = {
  EMAIL: 'email',
  STRING: 'string',
  NUMBER: 'number',
  INTEGER: 'integer',
  SPECIAL_SYMBOL: 'special_symbol'
}

class BaseValidator {
  constructor() {
    this.sub_validator = {};
    this.sub_validator[validTypes.EMAIL] = this._isEmail,
    this.sub_validator[validTypes.STRING] = this._isString;
    this.sub_validator[validTypes.NUMBER] = this._isNumber;
    this.sub_validator[validTypes.INTEGER] = this._isInteger;
    this.sub_validator[validTypes.SPECIAL_SYMBOL] = this._isSpecialSymbol;
  }
  validate (str, type) {
    if (!this.sub_validator[type]) {
      return ErrorType.VALIDATION_ERROR;
    }
  }
  _isString (str) {
    return typeof str === 'string';
  }

  _isNumber (str) {
    let num_reg = /[0-9]/;
    return (!this.isString(num)) && num_reg.test(num);
  }

  _isInteger(num) {
    let reg = /^[+-]?([0-9]+)$/;
    return reg.test(num);
  }

  _isSpecialSymbol(sym) {
    let reg = /^[!@#\$%\^\&\*\)\(\?+=\|\\~.,;:`_-]+$/g; ///const
    return (reg.test(sym));
  }
}

module.exports = BaseValidator;
module.exports.validTypes = validTypes;
