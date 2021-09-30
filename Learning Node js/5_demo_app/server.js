var express = require('express');

var app = express();

app.use(express.static(__dirname));

var messages = [
    {
        from: 'Eduardo',
        text: 'Hi',
    },
    {
        from: 'Pedro',
        text: 'Hi, how are you?',
    },
]

app.get('/initialMessages', (req, res)=>{
    res.send(messages);
});

var server = app.listen(3000, ()=>{
    console.log("Listening on port: ", server.address().port);
});