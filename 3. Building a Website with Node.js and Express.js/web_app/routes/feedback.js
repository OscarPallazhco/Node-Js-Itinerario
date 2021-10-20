const {Router} = require('express');
const router = Router();
const path = require('path');
const {check, validationResult} = require('express-validator');

// services
const FeedbackService = require('./../services/FeedbackService');
const feedbackService = new FeedbackService(path.join(__dirname, '..', 'data', 'feedback.json'));

router.get('/', async (req, res, next)=>{
    try {
        const feedback = await feedbackService.getList();
        const errors = req.session.feedback ? req.session.feedback.errors : false;
        const success = req.session.feedback ? req.session.feedback.success : false;
        req.session.feedback = {};
        return res.render('layout', {pageTitle: 'Feedback', template: 'feedback', feedback, errors, success});
    } catch (error) {
        return next(error);
    }
});

router.post('/',[
    // escape() para que no sea contenido html ni js
    check('name').trim().isLength({min:3}).escape().withMessage('A name is required'),
    check('email').trim().isEmail().normalizeEmail().withMessage('A valid email is required'),
    check('title').trim().isLength({min:3}).escape().withMessage('A title is required'),
    check('message').trim().isLength({min:5}).escape().withMessage('A name is required'),
], async (req, res, next)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            req.session.feedback = {
                errors: errors.array()
            };
            return res.redirect('/feedback')
        }
        const {name, email, title, message} = req.body;
        await feedbackService.addEntry(name, email, title, message);
        req.session.feedback = {
            success: 'thanks for you feedback'
        };
        return res.redirect('/feedback')
    } catch (error) {
        return next(error);
    }
});

module.exports = router;