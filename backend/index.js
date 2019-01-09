const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const uuidv4 = require('uuid/v4');

app.get('/', (req, res) => {
  res.send('<h1>The Socket IO Service is Running</h1>');
});

io.on('connection', socket => {
  socket.on('message', msg => {
    io.emit('message', {
      uuid: uuidv4(),
      username: msg.username,
      message: msg.message
    });
  });
});

http.listen(4000, () => {
  console.log('listening on *:4000');
});
