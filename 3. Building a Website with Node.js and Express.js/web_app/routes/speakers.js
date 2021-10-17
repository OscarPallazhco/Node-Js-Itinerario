const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.send("speakers");
});

router.get('/:user', (req, res)=>{
    res.send(`Speaker ${req.params.user}`);
});

module.exports = router;