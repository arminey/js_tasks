const Validator = require('./Validator');

class ArmPhoneValidator extends Validator {
  isArmPhone(phonenum) {
    let reg =  /^(((([0]{2}|[+])374)(10|11|12|91|99|95|41|43|93|94|98|55|77)*\d{6})|((([0]{2}|[+])374)?0?(10|11|12|91|99|95|41|43|93|94|98|55|77)*\d{6}))$/g;
    return reg.test(phonenum);
  }
}

module.exports = ArmPhoneValidator;
