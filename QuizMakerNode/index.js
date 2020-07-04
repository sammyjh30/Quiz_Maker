var express = require('express');
var app = express();

let http = require('http');
//Express acts as the handler fore requests to the server
//Store instance of server
let server = http.Server(app);

//Bind socket.io with the http server
let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

//Event to listen for connection from a user to the server
io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('new-message', (message) => {
      console.log(message);
      io.emit('new-message', message);
  });
});

//Start the server and listen to the given port
server.listen(port, () => {
  console.log(`started on port: ${port}`);
});
