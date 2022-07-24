const express = require('express');
const router = express.Router();

const indexrouter = require('./main.js');
const imgrouter = require('./img.js');
//const dbrouter = require('./db.js');
const adminrouter = require('./admin.js');

router.get('/', function(req,res,next){
    res.redirect('/main');
});

router.use('/main', indexrouter);
router.use('/imgs', imgrouter);
//router.use('/DBTEST', dbrouter);
router.use('/admin', adminrouter);

module.exports = router;

