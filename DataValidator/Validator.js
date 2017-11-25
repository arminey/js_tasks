class Validator {
  // returns true if str is string
  isString(str) {return typeof str === 'string'}
  // returns true if num is a number
  isNumber(num) {
    let num_reg = /[0-9]/;
    return (!this.isString(num)) && num_reg.test(num);
  }
  // returns true if num is an integer
  isInteger(num) {
    let reg = /^[+-]?([0-9]+)$/;
    return reg.test(num);
    }
  // returns true if num is a float
  isFloat(num) {
    let reg = /\d+\.\d+/g;
    return reg.test(num);
  }
  // returns true if sym does not contain alpha (a-z, A-Z) and numbers (0-9)
  isSpecialSymbol(sym) {
    let reg = /^[!@#\$%\^\&\*\)\(\?+=\|\\~.,;:`_-]+$/g;
    return (reg.test(sym));
  }
  // returns true if d is a valid date
  isDate(d) {
    if(Date.parse(d))
      return true;
    return false;
    }
}

module.exports = Validator;
