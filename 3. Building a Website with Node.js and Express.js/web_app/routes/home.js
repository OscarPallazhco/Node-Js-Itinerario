const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    // buscará el archivo pages/index dentro de la carpeta que se definió para views
    res.render('layout', {pageTitle: 'webPage with Express.js', template: 'index'});
});

module.exports = router;