const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
var cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

// Using cors package to enable cors requests temporarily while
// experimenting with react in a different project. Will set up
// this properly once I am more comfortable with webpack etc
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  require('./app/routes')(app, database);

  app.listen(port, () => {
    console.log('We are live on port ' + port);
  });
})
