var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('start', { title: 'Express' });
});

router.get('/characteristics', function(req, res, next) {
    res.render('characteristics', { title: 'Express' });
});

// TODO: put games as "/games/..."
router.get('/memory', function(req, res, next) {
    res.render('memory', { title: 'Express' });
});

router.get('/wheel', function(req, res, next) {
    res.render('wheel', { title: 'Express' });
});

router.get('/tictactoe', function(req, res, next) {
    res.render('tictactoe', { title: 'Express' });
});

router.get('/acceleration', function(req, res, next) {
    res.render('acceleration', { title: 'Express' });
});

module.exports = router;
