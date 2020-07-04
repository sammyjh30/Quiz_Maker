const express = require('express');
const app = express();

const config = require('./config');

const conn = require('./services/dbconnection.js');
const auth = require('./middleware/auth');

app.get('/', function (req, res) {
  conn.poolPromise.then((pool) => { //make sure connection is made 
    pool.request().query('SELECT 1') //use connection to make request 
      .then(result => {
        res.status(200).send(result.recordset)//get results and respond to request with a 200
      })
      .catch(err => { //throw error to catch above 
        throw err
      });
  }).catch(err => res.status(500).send(err)) //do shit with error
});

app.use("/hackerman", auth);

app.get('/hackerman', function (req, res) {
  res.status(200).send('hackerman you got in!')
});

app.listen(config.web.port, function () {
  console.log('Example app listening on port ' + config.web.port + '!');
});