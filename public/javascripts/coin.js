window.addEventListener( 'DOMContentLoaded', function () {

    const buttonRoolDice = document.querySelector( '.dice-roll' );

    function rollDice () {

        const status = document.getElementById( 'status' );

        var side1 = Math.floor( Math.random() * 6 ) + 1;

        if(side1 % 2 == 0){
            side1 = "Uguale";
        } else {
            side1 = "Contrari";
        }

        status.innerHTML = 'Avete ottenuto "' + side1 + '".';
    }

    buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false);

var charForm = document.getElementById("charForm");

$(charForm).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // Check if are selected exactly 4 characteristics
    if($('form#charForm input').siblings(':checked').length != limit) {
        alert("Per continuare è necessario selezionare 4 caratteristiche.");
        return false;
    }

    var formData = $(charForm).serializeArray();
    // console.log(formData);
    $.ajax({
        type: 'POST',
        url: $(charForm).attr('action'),
        data: formData
    }).done(function(response) {
        var selected = "";
        for (var entry in formData){
            var newSelected;
            console.log(formData[entry])
            if(formData[entry].value){
                newSelected = formData[entry].value;
                selected += newSelected + " ";
            }
        }
        document.getElementById("selectedChar").innerHTML = "Avete selezionato: " + selected
    })
});

// Allow to select only 4 characteristics
var limit = 4;
$('input.single-checkbox').on('change', function(evt) {
    if($('form#charForm input').siblings(':checked').length > limit) {
        this.checked = false;
        alert("Puoi selezionare solo 4 caratteristiche.");
    }
});