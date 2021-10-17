const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    // buscará el archivo pages/index dentro de la carpeta que se definió para views
    res.render('pages/index', {pageTitle: 'webPage with Express.js'});
});

module.exports = router;