const {Router} = require('express');
const router = Router();
const path = require('path');

// services
const FeedbackService = require('./../services/FeedbackService');
const feedbackService = new FeedbackService(path.join(__dirname, '..', 'data', 'feedback.json'));

router.get('/', async (req, res)=>{
    const feedback = await feedbackService.getList();
    return res.json(feedback);
});

router.post('/', (req, res)=>{
    res.send("feedback posted");
});

module.exports = router;