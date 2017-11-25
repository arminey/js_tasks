const AppConst = require('./../settings/constants');

// const ErrorType = require('./../settings/error-type');

const ErrorType = {
  SUCCESS: 'success',
  //---------------------------//
  USER_EXISTS: 'user_already_exists',
  UNKNOWN_ERROR: 'unknown_error', ///
  VALIDATION_ERROR: 'validation_error',
  USERNAME_MISSING: 'username_missing',
  PASSWORD_MISSING: 'password_missing',
  INVALID_USERNAME_RANGE: 'invalid_username_range',
  INVALID_PASSWORD_RANGE: 'invalid_password_range'
}


class Utility {
  static parseQuery(req, res, next) {
    req.query.offset = parseInt(req.query.offset);
    if(!isFinite(req.query.offset)) {
      req.query.offset = AppConst.OFFSET_DEFAULT_VALUE;
    }
    req.query.limit = parseInt(req.query.limit);
    if(!isFinite(req.query.limit)) {
      req.query.limit = AppConst.LIMIT_DEFAULT_VALUE;
    }
    next();
  }

  static generateError(type, options) {
    options = options || {};
    let error_obj = {
      type: type || ErrorType.UNKNOWN_ERROR,
      message: 'OOPS... SOMETHING IS NOT RIGHT'
    };
    switch (type) {
      case ErrorType.USER_EXISTS:
        error_obj.message = 'User is already exists.';
        break;
      case ErrorType.USERNAME_MISSING:
        error_obj.message = 'User is missing.';
        break;
      case ErrorType.VALIDATION_ERROR:
        error_obj.message = 'Validation error.';
        break;
      case ErrorType.PASSWORD_MISSING:
        error_obj.message = 'Password is missing.';
        break;
      case ErrorType.INVALID_USERNAME_RANGE:
        error_obj.message = 'Invalid min/max value for username.';
        break;
      case ErrorType.INVALID_PASSWORD_RANGE:
        error_obj.message = 'Password is not in range.';
        break;
    }
    return error_obj;
  }
}

module.exports = Utility;
module.exports.ErrorType = ErrorType;
