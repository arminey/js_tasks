const Validator = require('./Validator');

class URLValidator extends Validator {
  isURL(link) {
    let reg = /^(http[s]?:\/\/){0,1}(www\.){0,1}[\w+\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

    return reg.test(link);
  }
}

module.exports = URLValidator;
