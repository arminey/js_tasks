const Bleach = require('bleach');

const BaseValidator = require('./base');
// const ErrorTypes = require('./../../settings/error-type');

const Utility = require('./../utility');
// const Utility = require('./../utility').ErrorTypes;
const AppConst = require('./../../settings/constants');


function sanitization (str, next) {
      return str.toLowerCase();
      next();
}


class UserValidator extends BaseValidator {
  constructor () {
    super();
  }
  validateUsername(username, sanitize) {
    //1.check validation_error


    //3.logic checks(avoid special symbols, and with possible white list _,-,. ok')
    if (!username) {//////////user.username check
      return Utility.ErrorType.USERNAME_MISSING;
    }
      // console.log(Utility.generateError )
    //2.check length, and arguments length
    if (username.length < AppConst.USERNAME_MIN_LENGTH
        || username.length > AppConst.USERNAME_MAX_LENGTH)
    {
      return Utility.ErrorType.INVALID_USERNAME_RANGE;
    }
    //TODO

    sanitization(username);
    return  Utility.ErrorType.SUCCESS; //'SUCCESS';
  }
}

module.exports = new UserValidator ();
