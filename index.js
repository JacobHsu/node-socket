var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
//   res.sendFile(__dirname + '/public/index.html');
// });

io.on('connection', function(socket){
  console.log('a user connected',socket.id);
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    // send and receive any events you want
    io.emit('chat message show', socket.id, msg);
  });

  socket.on('change', function(data){
    var str = "0123456789abcdef", hex = "";
    for (j = 0; j < 6; j++) {
        hex = hex + str.charAt(Math.random() * str.length);
    }
    io.emit('index_get_response', socket.id, {color:hex});
  });
});

var port = process.env.PORT || 3000;
var ip = process.env.IP || 'localhost';

http.listen(port, function(){
  console.log('listening at ', ip+':'+port);
});
