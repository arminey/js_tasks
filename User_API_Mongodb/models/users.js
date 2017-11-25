const mongoose = require('mongoose');

const Schema =   mongoose.Schema;
const keygen = require('keygenerator');
const AppConst = require('./../settings/constants');


function generateAPIKey() {
    return (keygen._({ length: 2 }) + '-' + keygen._({ length: 6 })
        + '-' + keygen.number()
        + '-' + keygen._({ length: 6 })
        + '-' + keygen._({ length: 8 })).replace(/&/g, '');
}

let User = Schema({
  key: {
    type: String,
    default: generateAPIKey,
  },
  username: {
    type: String,
    trim: true,
    lowercase: true,
    index: {unique: true},
    minlength: AppConst.USERNAME_MIN_LENGTH,
    maxlength: AppConst.USERNAME_MAX_LENGTH
  },
  password: {
    type: String
  },
  email: {
    type: String,
    lowercase: true
  },
  name: {
    type: String,
    minlength: AppConst.NAME_MIN_LENGTH,
    maxlength: AppConst.NAME_MAX_LENGTH,
    default: null
  },
  age: {
    type: Number,
    min: AppConst.AGE_MIN,
    max: AppConst.AGE_MAX,
    default: null
  },
  deleted: {
    type: Boolean,
    index: true,
    default: false
  }
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

module.exports = mongoose.model('users', User);
