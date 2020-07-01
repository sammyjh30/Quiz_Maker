const express = require('express');
const app = express();
const conn = require('./Connection.js')
const quizRouter = require('./routes/QuizRoute')

app.use(express.json());

app.use('/quiz',quizRouter)//how to add a route to the system

app.get('/', function (req, res) {  //req is request and res is response
    conn.poolPromise.then((pool) => { //make sure connection is made 
     pool.request().query('SELECT 1') //use connection to make request 
    .then(result => { 
      res.status(200).send(result.recordset)//get results and respond to request with a 200
    })
    .catch( err => { //throw error to catch above 
      throw err
    });
  }).catch(err => res.status(500).send(err)) //do shit with error
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});