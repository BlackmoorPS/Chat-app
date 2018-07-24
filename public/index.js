var socket = io();
socket.on('connect', function() {
  alert('connected to server');
  jQuery('#message-form').on('submit', function (e){
    e.preventDefault();
    var name=jQuery('[name=Name]');
    var mail=jQuery('[name=Message]');
    socket.emit('createmessage', {
      from: name.val(),
      text: mail.val()
    });
  });
  socket.on('backmsg', (mail)=>{
    console.log(mail);
  });
});
socket.on('disconnect', function() {
  alert('Disconnected from server');
});
socket.on('messagefromserver', function (message) {
  console.log(message);
});
