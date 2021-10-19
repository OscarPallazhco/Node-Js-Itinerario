const {Router} = require('express');
const router = Router();
const path = require('path');

// services
const SpeakersService = require('./../services/SpeakerService');
const speakersService = new SpeakersService(path.join(__dirname, '..', 'data', 'speakers.json'));

// router.get('/', async (req, res)=>{
//     // ejemplo del uso de cookies para contar la cantidad de viitas a la pag
//     if (!req.session.speakersVisitedCount) {
//         req.session.speakersVisitedCount = 0;
//     }
//     req.session.speakersVisitedCount++;    
//     // console.log(req.session.speakersVisitedCount);

//     const speakers = await speakersService.getList();
//     return res.json(speakers);
// });

router.get('/', async (req, res)=>{
    const speakers = await speakersService.getList();
    const artwork = await speakersService.getAllArtwork();
    res.render('layout', {pageTitle: 'Speakers', template: 'speakers', speakers, artwork});
});

router.get('/:user', async (req, res)=>{
    const speaker = await speakersService.getSpeaker(req.params.user);
    const artwork = await speakersService.getArtworkForSpeaker(req.params.user);
    res.render('layout', {pageTitle: `${req.params.user}`, template: 'speaker', speaker, artwork});
});

module.exports = router;