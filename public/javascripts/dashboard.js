var taleData;



function readTaleData() {
    console.log("------OK-----")

    $.ajax({
        type: 'GET',
        url: '/start/jsonTaleData'
    }).done(function(response) {
        console.log("Ok fatto");
        console.log(response);
        taleData = response;
        // testList = response;
        document.getElementById('caratteristiche').innerHTML = taleData.finalCharacteristics;
        document.getElementById('oggetti').innerHTML = taleData.finalPowers;
        document.getElementById('luogo').innerHTML = taleData.finalPlace;
        document.getElementById('prove').innerHTML = taleData.finalTests;


        // Personal data
        var personalData = taleData.students + " \n" + taleData.teachingClass + " \n" + taleData.professor + " \n" + taleData.title + " \n" + taleData.other;
        document.getElementById('datiPersonali').innerHTML = personalData;
    })

}