const socketio = require('socket.io');

module.exports = server => {
  const io = socketio(server);

  io.on('connection', (socket) => {
    socket.broadcast.emit('message', 'A user is connected');
    socket.emit('message', 'Welcome to ChatApp sandBox');
    console.log('A user is connected');

    socket.on('message', msg => {
      io.emit('userMessage', msg);
    });

    socket.on('disconnect', () => console.log('A user left the connection'));
  });
};