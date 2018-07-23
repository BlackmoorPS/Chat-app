var socket = io();
socket.on('connect', function() {
  console.log('connected to server');
  socket.emit('createmessage', {
    Name: 'Prasanth Srinivasan',
    body: 'test message from webapp'
  });
});
socket.on('disconnect', function() {
  console.log('Disconnected from server');
});
socket.on('messagefromserver', function (message) {
  console.log(message);
});
