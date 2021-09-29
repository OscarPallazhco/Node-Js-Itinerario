var express = require('express');

var app = express();

app.use(express.static(__dirname));

var server = app.listen(3000, ()=>{
    console.log("Listening on port: ", server.address().port);
});