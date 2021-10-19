const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
require('dotenv').config();

const routes = require('./routes/routes');

const app = express();
const port = 3000;

const STATIC_PATH = path.join(__dirname, 'static');
const VIEWS_PATH = path.join(__dirname, 'views');
const INDEX_PATH = path.join(__dirname, 'static', 'index.html');

// variable global
app.locals.siteName = 'MyWeb'

app.set('trust proxy', 1)
app.use(cookieSession({
    name: "session",
    keys: [process.env.SESSION_KEY]
}));

app.set('view engine', 'ejs');
app.set('views', VIEWS_PATH);

// usar el middleware static de express, toda petición al servidor 
// pasará por este middleware
app.use(express.static(STATIC_PATH));

// services
const SpeakersService = require('./services/SpeakerService');
const speakersService = new SpeakersService(path.join(__dirname, 'data', 'speakers.json'));
// custom middleware
app.use(async (req, res, next)=>{
    try {
        const speakerNames = await speakersService.getNames();
        res.locals.speakerNames = speakerNames;
        return next();
    } catch (error) {
        console.log(error);
        return next(error);
    }
});

app.use('/', routes);


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});