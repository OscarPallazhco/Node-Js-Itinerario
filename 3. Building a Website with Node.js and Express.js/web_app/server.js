const express = require('express');
const path = require('path');
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

app.get('/', (req, res)=>{
    // buscará el archivo pages/index dentro de la carpeta que se definió para views
    res.render('pages/index', {pageTitle: 'webPage with Express.js'})
});


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});