const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();
const port = 3000;

const STATIC_PATH = path.join(__dirname, 'static');
const VIEWS_PATH = path.join(__dirname, 'views');
const INDEX_PATH = path.join(__dirname, 'static', 'index.html');

app.set('view engine', 'ejs');
app.set('views', VIEWS_PATH);

// usar el middleware static de express, toda petición al servidor 
// pasará por este middleware
app.use(express.static(STATIC_PATH));

app.use('/', routes);


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});