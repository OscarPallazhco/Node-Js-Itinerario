const {Router} = require('express');
const router = Router();
const path = require('path');

// services
const SpeakersService = require('./../services/SpeakerService');
const speakersService = new SpeakersService(path.join(__dirname, '..', 'data', 'speakers.json'));

router.get('/', async (req, res)=>{
    const speakers = await speakersService.getList();
    return res.json(speakers);
});

router.get('/:user', (req, res)=>{
    res.send(`Speaker ${req.params.user}`);
});

module.exports = router;