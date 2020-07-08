const express = require('express');
const bodyParser = require('body-parser')
var cors = require('cors');

const app = express();
const quizRouter = require('./routes/QuizRoute')
const userRouter = require('./routes/UserRoute')

const config = require('./config');

const conn = require('./services/dbconnection.js');
const auth = require('./middleware/auth');

const mailer = require('./services/mailer');

app.use(cors());

app.use(express.json());
app.use('/quiz',quizRouter)//how to add a route to the system
app.use('/user',userRouter)
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

app.use("/sendemail", auth);
app.use("/sendemail", bodyParser.json());
app.use("/sendemail", express.json());
app.post('/sendemail', function (req, res) {
  var mailOptions = req.body;
  mailer.transport.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(info);
    }
  });
});

app.listen(config.web.port, function () {
  console.log('Example app listening on port ' + config.web.port + '!');
});