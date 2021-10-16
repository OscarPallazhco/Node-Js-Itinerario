const express = require('express');

const router = express.Router();

module.exports = ()=>{
    router.get('/', (req, res)=>{
        // buscará el archivo pages/index dentro de la carpeta que se definió para views
        res.render('pages/index', {pageTitle: 'webPage with Express.js'});
    });

    return router;
};