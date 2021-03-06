var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
//   res.sendFile(__dirname + '/public/index.html');
// });

app.get('/deploy', function(req, res){
  res.send('<h1>deploy..</h1>');

  var cmd = 'bash';
  var args = ['./deploy.sh'];

  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var resp = "";

  child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
  child.stdout.on('end', function() { console.log(resp); });
});

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
});

var port = process.env.PORT || 3000;
var ip = process.env.IP || 'localhost';

http.listen(port, function(){
  console.log('listening at ', ip+':'+port);
});
