const {Router} = require('express');
const router = Router();

const homeRoute = require("./home");
const speakersRoute = require("./speakers");
const feedbackRoute = require("./feedback");

router.use('/', homeRoute);
router.use('/speakers', speakersRoute);
router.use('/feedback', feedbackRoute);

module.exports = router;