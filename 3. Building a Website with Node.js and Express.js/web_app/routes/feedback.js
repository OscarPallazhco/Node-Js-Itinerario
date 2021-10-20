const {Router} = require('express');
const router = Router();
const path = require('path');

// services
const FeedbackService = require('./../services/FeedbackService');
const feedbackService = new FeedbackService(path.join(__dirname, '..', 'data', 'feedback.json'));

router.get('/', async (req, res, next)=>{
    try {
        const feedback = await feedbackService.getList();
        return res.json(feedback);
    } catch (error) {
        return next(error);
    }
});

router.post('/', (req, res, next)=>{
    try {
        res.send("feedback posted");
    } catch (error) {
        return next(error);
    }
});

module.exports = router;