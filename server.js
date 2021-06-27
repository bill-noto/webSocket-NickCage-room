var express = require('express');
var app = express();
app.use(express.static('public'));

var server = require('http').createServer(app);

var io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('Client is connected');

    socket.on('message', (data) => {
        console.log(data);
        io.emit('newCoords', data)    
    })

    socket.on('disconnect', ()=>{
        console.log('Client has disconnected');
    })
})

server.listen(3000, function(){
    console.log('Server is running!');
})