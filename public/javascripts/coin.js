
function rollDice () {

    const status = document.getElementById( 'status' );

    var side1 = Math.floor( Math.random() * 6 ) + 1;

    if(side1 % 2 == 0){
        side1 = "Uguale";
    } else {
        side1 = "Contrari";
    }

    var coinData = {
        contrary : side1
    };

    $.ajax({
        type: 'POST',
        url: '/start/registerCharacteristicsType',
        data: coinData
    }).done(function(response) {
        status.innerHTML = 'Avete ottenuto "' + side1 + '".';

        // Disable this button
        $('button.dice-roll').prop('disabled', true);

        // Enable next button
        $('button.nextButton').prop('disabled', false);
    });

}

// Allow to select only 4 characteristics
var charlimit = 4;
$('input.single-checkbox').on('change', function(evt) {
    if($('form#charForm input').siblings(':checked').length > charlimit) {
        this.checked = false;
        alert("Puoi selezionare solo 4 caratteristiche.");
    }
});

var charForm = document.getElementById("charForm");

$(charForm).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // Check if are selected exactly 4 characteristics
    if($('form#charForm input').siblings(':checked').length != charlimit) {
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

        // Disable confirm button
        $('input#coinButton.cursor').prop('disabled', true);

        // Enable coin button
        $('button.dice-roll').prop('disabled', false);
    })
});

