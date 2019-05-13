var express = require('express');
var router = express.Router();

/*  */
router.get('/', function(req, res, next) {
    res.render('characteristics', { title: 'Express' });
});

router.get('/characteristics', function(req, res, next) {
    res.render('characteristics', { title: 'Express' });
});

// TODO: put games as "/games/..."
router.get('/memory', function(req, res, next) {
    res.render('memory', { title: 'Express' });
});

router.get('/places', function(req, res, next) {
    res.render('places', { title: 'Express' });
});

router.get('/tictactoe', function(req, res, next) {
    res.render('tictactoe', { title: 'Express' });
});

router.get('/acceleration', function(req, res, next) {
    res.render('acceleration', { title: 'Express' });
});

/* Save Characteristics for characters */
router.post('/registerCharacteristics', function(req, res, next) {
    var request = req.body;

    Object.keys(request).forEach(function(key,index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        console.log('Selected characteristics');
        console.log('this is the key (' + key + ') . Value: ' + request[key]);
    });
    res.status(204).send();

});

router.get('/powers', function(req, res, next) {
    res.render('powers', { title: 'Express' });
});

/* Save Characteristics for characters */
router.post('/registerPowers', function(req, res, next) {
    var request = req.body;

    Object.keys(request).forEach(function(key,index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        console.log('Selected characteristics');
        console.log('this is the key (' + key + ') . Value: ' + request[key]);
    });
    res.status(204).send();

});


module.exports = router;
