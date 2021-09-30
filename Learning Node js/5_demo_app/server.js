var express = require('express');

var app = express();

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
    res.sendStatus(200);
});

var server = app.listen(3000, ()=>{
    console.log("Listening on port: ", server.address().port);
});