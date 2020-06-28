const express = require('express');
const app = express();
const conn = require('./Connection.js')

app.get('/', function (req, res) {  
  console.log(conn.poolPromise);
  conn.poolPromise.then((pool) => {
    pool.request().query('SELECT 1')
    .then(result => {console.log(result.recordset)})
  })
  res.status(200).send('test');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});