var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('start', { title: 'Express' });
});

router.get('/memory', function(req, res, next) {
    res.render('memory', { title: 'Express' });
});

router.get('/wheel', function(req, res, next) {
    res.render('wheel', { title: 'Express' });
});

module.exports = router;
