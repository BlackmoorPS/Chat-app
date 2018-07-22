const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
var app=express();
var server=http.createServer(app);
var io=socketIO(server);
io.on('connection', (socket)=>{
  socket.on('join', ())
});
