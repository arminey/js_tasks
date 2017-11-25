const Validator = require('./Validator');

class UsernameValidator extends Validator {
  isUser(user) {
    let reg = /^[\w+_]{4,24}$/;

    return this.isString(user) && reg.test(user);
  }
}

module.exports = UsernameValidator;
