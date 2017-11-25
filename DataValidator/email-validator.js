const Validator = require('./Validator');

class EmailValidator extends Validator {
  isEmail(mail) {
    let reg = /^([\w-\.]+@[\w\.]+\.{1}[\w]+)$/;
    return reg.test(mail);
  }
}


module.exports = EmailValidator;
