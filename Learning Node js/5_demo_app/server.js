require('dotenv').config();
var express = require('express');
const mongoose = require('mongoose');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));
// ya no es necesario instalar body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}))

var Message = mongoose.model('Message', {
    from: String,
    text: String
});

app.get('/messages', (req, res)=>{
    // se le pasa un object vacio para que devuelva todos los elementos
    Message.find({}, (err, messages)=>{
        res.send(messages);
    });
});

app.post('/messages', (req, res)=>{
    var message = new Message(req.body);
    message.save((err)=>{
        if (err) {
            res.sendStatus(500);
        }
        io.emit('message', req.body);
        res.sendStatus(200);
    });
});

io.on('connection', (socket)=>{
    console.log('Client', socket.id, 'is connected!');
});

const dbUrl = process.env.DB_CNN;
mongoose.connect(dbUrl, (err) => {
    console.log("Mongo DB connected ", err);
});

var server = http.listen(3000, ()=>{
    console.log("Listening on port: ", server.address().port);
});