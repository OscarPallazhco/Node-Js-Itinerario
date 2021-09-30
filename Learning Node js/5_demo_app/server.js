var express = require('express');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
// ya no es necesario instalar body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}))

var messages = []

app.get('/messages', (req, res)=>{
    res.send(messages);
});

app.post('/messages', (req, res)=>{
    messages.push(req.body)
    io.emit('message', req.body);
    res.sendStatus(200);
});

io.on('connection', (socket)=>{
    console.log('Client', socket.id, 'is connected!');
});

var server = http.listen(3000, ()=>{
    console.log("Listening on port: ", server.address().port);
});