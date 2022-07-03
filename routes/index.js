const express = require('express');
const router = express.Router();

const indexrouter = require('./main.js');
const imgrouter = require('./img.js');

router.use('/main', indexrouter);
router.use('/imgs', imgrouter);

module.exports = router;

