var express = require('express');
var router = express.Router();
// For json file
'use strict';
const fs = require('fs');
var taleFile = require('../taleData.json');

var taleData = {
    characteristics : [],
    finalCharacteristics : [],
    contrary : "", // Uguale, Contrari
    powers : [],
    gamesStatus : [], // Win, Fail
    finalPowers : [],
    places : [],
    finalPlace : 0,
    tests: [],
    finalTests : [],
    students : "",
    teachingClass : "",
    professor : "",
    title : "",
    other : ""
};

var caratteristiche = ["Bello", "Muscoloso", "Pigro", "Umile", "Avaro", "Sensibile", "Caritatevole", "Debole", "Lento", "Intelligente", "Impaziente", "Presuntuoso", "Simpatico", "Prudente", "Generoso"];
var contrari = ["Brutto", "Gracile", "Attivo", "Altezzoso", "Generoso", "Indifferente", "Egoista", "Forte", "Veloce", "Ignorante", "Paziente", "Modesto", "Antipatics", "Audace", "Volgare"];

/*  */
router.get('/', function(req, res, next) {
    res.render('characters', { title: 'Express' });
});

router.get('/characters2', function(req, res, next) {
    res.render('characters2', { title: 'Express' });
});

router.get('/characters3', function(req, res, next) {
    res.render('characters3', { title: 'Express' });
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

router.get('/snake', function(req, res, next) {
    res.render('snake', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
    res.render('user', { title: 'Express' });
});

router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', { title: 'Express' });
});

/* Save Characters */


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
        console.log('Selected powers');
        console.log('this is the key (' + key + ') . Value: ' + request[key]);
        taleData.powers.push(request[key]);
    });
    console.log(taleData)
    res.status(204).send();

});

router.post('/updateGameStatus', function(req, res, next) {
    var request = req.body;
    console.log(req);
    console.log(taleData);

    taleData.gamesStatus.push(request.data);

    console.log(taleData);
    res.status(204).send();

});

router.post('/registerPlaces', function(req, res, next) {
    var request = req.body;
    // console.log(request)
    console.log(taleData)

    Object.keys(request).forEach(function(key,index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        console.log('Selected places');
        console.log('this is the key (' + key + ') . Value: ' + request[key]);
        taleData.places.push(request[key]);
    });
    console.log(taleData);
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

router.post('/updateFinalPlace', function(req, res, next) {
    var request = req.body;
    // console.log(request.data);
    // console.log(taleData);
    // console.log(taleData.places[request.data]);
    taleData.finalPlace = taleData.places[request.data];

    console.log(taleData);
    res.status(204).send();

});

router.get('/tests', function(req, res, next) {
    res.render('tests', { title: 'Express' });
});

router.get('/tests2', function(req, res, next) {
    res.render('tests2', { title: 'Express' });
});

router.get('/getAllTest', function(req, res, next) {
    res.send(taleData.tests);
});

router.post('/registerTests', function(req, res, next) {
    var request = req.body;
    // console.log(request)
    console.log(taleData)

    Object.keys(request).forEach(function(key,index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        console.log('Selected places');
        console.log('this is the key (' + key + ') . Value: ' + request[key]);
        taleData.tests.push(request[key]);
    });
    console.log(taleData);
    res.status(204).send();
});

router.post('/registerFinalTests', function(req, res, next) {
    // TODO: not done yet
});

router.post('/registerUsers', function(req, res, next) {
    var request = req.body;
    console.log(request);
    // console.log(request['field1'])
    taleData.students = request['field1'];
    taleData.teachingClass = request['field2'];
    taleData.professor = request['field3'];
    taleData.title = request['field4'];
    taleData.other = request['field5'];

    // Process all fairy tale data
    saveAll();

    console.log(taleData);

    res.render('dashboard', { title: 'Express' });
});

router.get('/jsonTaleData', function(req, res, next) {
    res.json(taleData);
});

function saveAll() {
    // Process Characteristics
    if(taleData.contrary == "Contrari"){
        for(var i = 0; i++; i < 4){
            var temIndex = caratteristiche.indexOf(taleData.characteristics[i]);
            console.log(temIndex)
            finalCharacteristics.push(contrari[temIndex]);
        }
    } else {
        taleData.finalCharacteristics = taleData.characteristics;
    }

    // Process Powers
    for(var i = 0; i++; i < 3) {
        if(taleData.gamesStatus[i] == "Win"){
            taleData.finalPowers.push(taleData.powers[i])
        }
    }

    var data = JSON.stringify(taleData, null, 2);

    fs.writeFile('taleData.json', data, 'utf8',  function (err){
        if (err) throw err;
        console.log('Data written to file');
    });
}


module.exports = router;
