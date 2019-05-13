var express = require('express');
var router = express.Router();
// For json file
'use strict';
const fs = require('fs');

var taleData = {
    characteristics : [],
    contrary : "",
    powers : [],
    gamesStatus : []
}

/*  */
router.get('/', function(req, res, next) {
    res.render('characteristics', { title: 'Express' });
});

router.get('/characteristics', function(req, res, next) {
    res.render('characteristics', { title: 'Express' });
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
    console.log(taleData)

    Object.keys(request).forEach(function(key,index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        console.log('Selected characteristics');
        console.log('this is the key (' + key + ') . Value: ' + request[key]);
        taleData.characteristics.push(request[key]);
    });
    console.log(taleData)
    res.status(204).send();

});

/* Save characteristics type */
router.post('/registerCharacteristicsType', function(req, res, next) {
    var request = req.body;
    // console.log(request.contrary);
    // console.log(taleData)

    taleData.contrary = request.contrary;

    console.log(taleData);
    res.status(204).send();

});


router.get('/powers', function(req, res, next) {
    res.render('powers', { title: 'Express' });
});

/* Save Characteristics for characters */
router.post('/registerPowers', function(req, res, next) {
    var request = req.body;
    console.log(taleData)

    Object.keys(request).forEach(function(key,index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        console.log('Selected characteristics');
        console.log('this is the key (' + key + ') . Value: ' + request[key]);
        taleData.powers.push(request[key]);
    });
    console.log(taleData)
    res.status(204).send();

});

router.post('/updateGameStatus', function(req, res, next) {
    var request = req.body;
    console.log(request);
    console.log(taleData);

    taleData.gamesStatus.push(request.data);

    console.log(taleData);
    res.status(204).send();

});

router.get('/snake', function(req, res, next) {
    res.render('snake', { title: 'Express' });
});

// Method in prova, non funziona
router.get('/saveAll', function(req, res, next) {
    var student = {
        name: 'Mike',
        age: 23,
        gender: 'Male',
        department: 'English',
        car: 'Honda'
    };

    var data = JSON.stringify(student, null, 2);

    fs.writeFile('../taleData.json', data,  function (err){
        if (err) throw err;
        console.log('Data written to file');
    });

    res.render('/', { title: 'Express' });

});

// Based on data in taleData process what the user obtained and than create dashboard
// function processData() {
//
// }


module.exports = router;
