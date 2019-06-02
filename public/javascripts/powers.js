
var powForm = document.getElementById("powForm");

// Allow to select only 3 powers
var limit = 3;

$(powForm).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // Check if are selected exactly 3 powers
    if($('form#powForm input').siblings(':checked').length != limit) {
        alert("Per continuare è necessario selezionare 3 poteri/oggetti magici.");
        return false;
    }

    var formData = $(powForm).serializeArray();
    // console.log(formData);
    $.ajax({
        type: 'POST',
        url: $(powForm).attr('action'),
        data: formData
    }).done(function(response) {
        console.log("Ok fatto")
        // Disable this button
        $('input.cursor').prop('disabled', true);

        // Enable next button
        $('button.nextButton').prop('disabled', false);
    })
});

$('input.single-checkbox').on('change', function(evt) {
    if($('form#powForm input').siblings(':checked').length > limit) {
        this.checked = false;
        alert("Puoi selezionare solo 3 poteri/oggetti magici.");
    }
});

function updateGameStatus(gameStatus) {
    var gameData = {
        data : gameStatus
    };

    $.ajax({
        type: 'POST',
        url: '/start/updateGameStatus',
        data: gameData
    }).done(function(response) {
        console.log("Game status updated")
    });

}

function checkstatus(wn,ls,ts) {
    // The user winned
    if(wn == 3){
        // Enable next button
        $('button.nextButton').prop('disabled', false);
        //Disable new game button
        $('input.newGame').prop('disabled', true);
        // update game status
        updateGameStatus("Win");
    }
    // The user failed
    if(ls == 3){
        // Enable next button
        $('button.nextButton').prop('disabled', false);
        //Disable new game button
        $('input.newGame').prop('disabled', true);
        // update game status
        updateGameStatus("Fail");
    }
}

function checkstatusAcceleration(score) {
    console.log("Score obtained: " + score);
    if (score >= 2000){
        updateGameStatus("Win");
    }
    else {
        updateGameStatus("Fail");
    }
    // Enable next button
    $('button.nextButton').prop('disabled', false);
    //Disable new game button
    $('button.newGame').prop('disabled', true);
}

function checkstatusSnake(score) {
    if (score >= 160){
        console.log("Score obtained: " + score + "therefore, you " + "WINNED");
        alert("CONGRATULAZIONI! HAI VINTOO!!");
        updateGameStatus("Win");
    }
    else {
        console.log("Score obtained: " + score + "therefore, you " + "FAILED");
        alert("MI DISPIACE! PURTROPPO HAI PERSO!!");
        updateGameStatus("Fail");
    }
    // Enable next button
    $('button.nextButton').prop('disabled', false);
    //Disable new game button
    $('button.newGame').prop('disabled', true);
}