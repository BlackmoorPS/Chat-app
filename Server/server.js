const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const {createmessage} =require('./message');
const port=process.evn || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var publicpath=path.join(__dirname, '../public');
app.use(express.static(publicpath));

io.on('connection', (socket)=>{
  console.log('New user connected');
  socket.emit('newmessage', createmessage('Admin','Welcome to the chat app'));
  socket.on('createmessage', (mail)=>{
    // socket.emit('backmsg', createmessage(mail.from, mail.text));
    io.emit('newmessage', createmessage(mail.from,mail.text));
  });
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
  socket.broadcast.emit('newmessage', createmessage('Admin', 'New user joined'));

});

server.listen(port, ()=>{
  console.log(`connected via port ${port}`);
});
