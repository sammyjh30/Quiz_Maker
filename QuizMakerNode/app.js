const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const config = require('./config');
const auth = require('./middleware/auth');
const conn = require('./services/dbconnection.js');
const quizRouter = require('./routes/QuizRoute')
const userRouter = require('./routes/UserRoute')
const mailer = require('./routes/MailerRoute');

app.use(cors());

//app.use(auth);  // enable request authentication
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Quiz Maker Backend</h1>")
});

// Socket
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {  
  var username = "";

  username = socket.handshake.query['user']
  console.log(username + ' connected'); 

  socket.on('join', function(roomId) {
    socket.join(roomId);
    console.log(username + ' connected for roomId:' + roomId); 
  });

  socket.on('message', (msg, roomId, timeStamp) => {
    console.log(msg);
    //emits message to all connected
    socket.broadcast.to(roomId).emit('message-broadcast', {
      username,
      msg,
      timeStamp,
      roomId
    });
  });

  socket.on('question', (question, roomId) => {
    console.log(question);
    //emits message to all connected
    socket.broadcast.to(roomId).emit('question-broadcast', {
      question,
      roomId
    });
  });

  socket.on('disconnecting', () => {
    const rooms = Object.keys(socket.rooms);
    console.log("DICONNECTING FROM ROOM: " + rooms[0]);
    // the rooms array contains at least the socket ID
  });

  socket.on('disconnect', () => {
     console.log('a user disconnected. ' +  username);
  });
});


http.listen(3001, () => {
  console.log('listening on *:3001');
});
// 

app.use('/quiz', quizRouter);  //how to add a route to the system
app.use('/user', userRouter);
app.use('/mailer', mailer);

app.get('/testDB', function (req, res) {
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

app.listen(config.web.port, function () {
  console.log('Example app listening on port ' + config.web.port + '!');
});