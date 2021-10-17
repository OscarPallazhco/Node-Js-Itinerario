const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.send("feedback");
});

router.post('/', (req, res)=>{
    res.send("feedback posted");
});

module.exports = router;