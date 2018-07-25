var socket = io();
socket.on('connect', function() {
  console.log('connected to server');
  jQuery('#message-form').on('submit', function (e){
    e.preventDefault();
    var mail=jQuery('[name=Message]');
    socket.emit('createmessage', {
      from: 'User',
      text: mail.val()
    });
  });
  // socket.on('backmsg', (mail)=>{
  //   console.log(mail);
  // });
  socket.on('newmessage', (mail)=>{
    var li=jQuery('<li></li>');
    li.text(`${mail.from}: ${mail.text}`);
    jQuery('#messages').append(li);
  });
});
socket.on('disconnect', function() {
  alert('Disconnected from server');
});
// socket.on('messagefromserver', function (message) {
//   console.log(message);
// });
