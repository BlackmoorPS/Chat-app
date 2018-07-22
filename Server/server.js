const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
var app=express();
const port=process.evn || 3000;
var server=http.createServer(app);
var publicpath=path.join(__dirname, '../public');
app.use(express.static(publicpath));

server.on('Connection', (socket)=>{
  socket.on('event',(params,callback)=>{});
});

app.listen(port, ()=>{
  console.log(`connected via port ${port}`);
});
