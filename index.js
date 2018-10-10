var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

let m = "kick off"

io.on('connection', function (socket) {
  socket.on('soccer', function(message){
    console.log(message);
    socket.emit('soccer', m);
  });
});

server.listen(process.env.PORT || 3000,function(){
    console.log('Listening on '+ server.address().port);
});
