const {Router} = require('express');
const router = Router();
const path = require('path');

// services
const SpeakersService = require('./../services/SpeakerService');
const speakersService = new SpeakersService(path.join(__dirname, '..', 'data', 'speakers.json'));

router.get('/', async (req, res)=>{
    // buscará el archivo pages/index dentro de la carpeta que se definió para views
    const topSpeakers = await speakersService.getList();
    const artwork = await speakersService.getAllArtwork();
    res.render('layout', {pageTitle: 'webPage with Express.js', template: 'index', topSpeakers, artwork});
});

module.exports = router;