const express = require('express');
const app = express();

const config = require('./config');

const conn = require('./services/dbconnection.js');
const auth = require('./middleware/auth');

const mailer = require('./services/mailer');

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

app.get('/sendemail', function (req, res) {
  mailer.transport.sendMail(mailer.testMessage, function (err, info) {
    if (err) {
      res.status(500).send('failed to send!')
      return false;
    } else {
      res.status(200).send(info)
      return true;
    }
  });
});

app.listen(config.web.port, function () {
  console.log('Example app listening on port ' + config.web.port + '!');
});