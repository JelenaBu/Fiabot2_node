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

        // Characteristics
        var characteristicsText = "";
        taleData.finalCharacteristics.forEach(function(element) {
            characteristicsText = characteristicsText.concat("- " + element + "<br/>");
        });

        document.getElementById('caratteristiche').innerHTML = characteristicsText;
        document.getElementById('oggetti').innerHTML = taleData.finalPowers;
        document.getElementById('luogo').innerHTML = taleData.finalPlace;

        // Tests
        var testsText = "";
        taleData.finalTests.forEach(function(element) {
            testsText = testsText.concat("- " + element + "<br/>");
        });
        document.getElementById('prove').innerHTML = testsText;

        // Personal data
        var personalDataText = taleData.students + "<br/>";
        personalDataText = personalDataText.concat(taleData.teachingClass + "<br/>");
        personalDataText = personalDataText.concat(taleData.professor + "<br/>");
        personalDataText = personalDataText.concat(taleData.title + "<br/>");
        personalDataText = personalDataText.concat(taleData.other + "<br/>");

        // var personalData = taleData.students + " \n" + taleData.teachingClass + " \n" + taleData.professor + " \n" + taleData.title + " \n" + taleData.other;
        document.getElementById('datiPersonali').innerHTML = personalDataText;
    })

}