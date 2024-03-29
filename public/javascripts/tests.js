var testsForm = document.getElementById("testsForm");

$(testsForm).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    var formData = $(testsForm).serializeArray();

    $.ajax({
        type: 'POST',
        url: $(testsForm).attr('action'),
        data: formData
    }).done(function(response) {
        console.log("Ok fatto");

        // Disable this button
        $('input#confirmTests').prop('disabled', true);

        // Enable wheel spin
        // container.on("click", spin);
        //container.select("circle").style({"fill": "#ffff99"});
        enableNext();
    })
});

function enableNext() {
    // Enable next button
    $('button.nextButton').prop('disabled', false);

}


var testList = [];
var testListFinal = [];
var nTests = 0;

function populateTests() {
    $.ajax({
        type: 'GET',
        url: '/start/getAllTest'
    }).done(function(response) {
        console.log("Ok fatto");
        // console.log(response);

        testList = response;
    })
}

// function rollDice2 () {
//     populateTests();
//
//     const status = document.getElementById( 'status' );
//
//     var side1 = Math.floor( Math.random() * 6 ) + 1;
//
//     if(side1 % 2 == 0){
//         side1 = 1;
//     } else {
//         side1 = 3;
//     }
//
//     nTests = side1;
//
//     status.innerHTML = 'Avete ottenuto "' + side1 + '".';
//
//     // Disable this button
//     $('button.dice-roll').prop('disabled', true);
//
//     // Enable wheel spin
//     container.on("click", spin);
//     container.select("circle").style({"fill": "#ffff99"});
// }

jQuery(document).ready(function($){
    populateTests();

    const status = document.getElementById( 'status' );
    var side1;
    $('#coin2').on('click', function(){
        var flipResult = Math.random();
        $('#coin2').removeClass();
        setTimeout(function(){
            if(flipResult <= 0.5){
                $('#coin2').addClass('heads');
                side1 = 1;
                console.log('it is head');
            }
            else{
                $('#coin2').addClass('tails');
                side1 = 3;
                console.log('it is tails');
            }

            nTests = side1;
            status.innerHTML = 'Avete ottenuto "' + side1 + '".';

            // Enable wheel spin
            container.on("click", spin);
            container.select("circle").style({"fill": "#ffff99"});

        }, 100);
    });
});

function updateEsito(index) {
    testListFinal.push(testList[index]);

    var esitoText = "Le prove che dovranno essere affrontate sono... <br/>";

    testListFinal.forEach(function(element) {
        esitoText = esitoText.concat("- " + element + "<br/>");
    });
    // console.log(esitoText)
    document.getElementById('esito').innerHTML = esitoText;

    if (testListFinal.length == nTests){
        enableNext();
        container.on("click", "#");
        var totalData = {
            finalTests : testListFinal
        };
        $.ajax({
            type: 'POST',
            url: '/start/registerFinalTests',
            data: totalData
        }).done(function(response) {
            console.log("Successfully sent to server.")
        });
    }
}