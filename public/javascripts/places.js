
var placesForm = document.getElementById("placesForm");

$(placesForm).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    var formData = $(placesForm).serializeArray();
    // console.log(formData);
    $.ajax({
        type: 'POST',
        url: $(placesForm).attr('action'),
        data: formData
    }).done(function(response) {
        console.log("Ok fatto");

        // Disable this button
        $('input#confirmPlaces').prop('disabled', true);

        // Enable next button
        $('button.nextButton').prop('disabled', false);

        // Enable wheel spin
        container.on("click", spin);
    })
});

function enableNext() {
    // Enable next button
    $('button.nextButton').prop('disabled', false);

}

function registerFinalPlace(place){
    console.log("Luogo: " + place)

    var placeData = {
        data : place
    };

    $.ajax({
        type: 'POST',
        url: '/start/updateFinalPlace',
        data: placeData
    }).done(function(response) {
        console.log("Final place status updated")
    });


}
