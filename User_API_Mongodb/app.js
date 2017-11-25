const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Utility = require('./services/utility');
const AppConst = require('./settings/constants');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(Utility.parseQuery);

require('./models/users');

const con = mongoose.createConnection(AppConst.DB_URL);

app.db = {
  users: con.model('users')
}

require('./controllers/api')(app);

app.listen(3002, () => {console.log('The server is running. ' + 'Port is ' + 3002)});
