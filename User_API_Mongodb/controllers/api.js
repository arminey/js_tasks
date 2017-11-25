const crypto = require('crypto');
const Base = require('./../services/validators/base');
const Utility = require('./../services/utility');
const AppConst = require('./../settings/constants');
const UserValidator = require('./../services/validators/user-validator');

//CRUD (Create, Read, Update, Delete) operations
module.exports = function (app) {

  //Read operation
  app.get('/api/users', (req, res) => {
    app.db.users.find({})
          .skip(req.query.offset)
          .limit(req.query.limit)
          .exec((err, data) => {
            if (err) {
              return res.send('Not found');
            }
            let response = data.map(d => {
              return {
                username: d.username,
                id: d._id,
                key: d.key,
                email: d.email,
                name: d.name,
                age: d.age
              }
            });
            return res.send(response);
          });
  });

  //Create operation
  app.post('/api/users', (req, res) => {
    let user = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    };
    // let UserValidator1 = new UserValidator();
    // UserValidator.validateUsername(user.username);
    let uv_response = UserValidator.validateUsername(user.username);
    if(uv_response != 'SUCCESS') { //Utility.ErrorTypes.SUCCESS) {

      return res.send(Utility.generateError(uv_response));
    }
    if (!user.password) {

      return res.send(Utility.generateError(
        Utility.ErrorType.PASSWORD_MISSING)
      );
    }
    if (user.password.length < AppConst.PASSWORD_MIN_LENGTH
        || user.password.length > AppConst.PASSWORD_MAX_LENGTH)
    {
      return res.send(Utility.generateError(
        Utility.ErrorType.INVALID_PASSWORD_RANGE)
      );
    }
    user.password = crypto.createHash('sha1').update(user.password + 'hello').digest('hex');
    app.db.users.findOne({username: req.body.username},(err, data) => {
      if (data) {
        return res.send(Utility.generateError(Utility.ErrorType.USER_EXISTS));
      }
      // TODO: check and validate name, check and validate age

      app.db.users.create(user,(err, data) => {
        if(err) {
          res.send(Utility.generateError(Utility.ErrorType.USER_CREATION_ERROR));
        }
        return res.send(data);
      });
    });
  });

  //Update operation
  app.put('/api/users/:id', function (req, res) {
    app.db.users.findOne({_id: req.params.id}, (err, data) => {
      if (err) {
        return res.send('Error merror');
      }
      let new_user = {
        username: req.body.username || data.username,
        password: req.body.password || data.password,
        email: req.body.email || data.email,
        name: req.body.name || data.name,
        age: req.body.age || data.age
      };
      app.db.users.update({_id: req.params.id}, {$set: new_user}, (err, data) => {
        if (err) {
          console.log(err);
          res.send('Error Update.');
        }
        return res.send(data);
      });
    });
  });

  //Delete operation
  app.delete('/api/users/:id', (req, res) => {
    app.db.users.remove({_id: req.params.id}, (err, data) => {
      if(err) {
        res.send('Error Delete.');
      }
      return res.send(data);
    })
  })

}
