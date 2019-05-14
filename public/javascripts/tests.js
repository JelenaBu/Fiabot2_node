var testsForm = document.getElementById("testsForm");

$(testsForm).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    var formData = $(testsForm).serializeArray();
    // console.log(formData);
    $.ajax({
        type: 'POST',
        url: $(testsForm).attr('action'),
        data: formData
    }).done(function(response) {
        console.log("Ok fatto");

        // Disable this button
        $('input#confirmTests').prop('disabled', true);

        // Enable wheel spin
        container.on("click", spin);
        container.select("circle").style({"fill": "#ffff99"});
    })
});

function enableNext() {
    // Enable next button
    $('button.nextButton').prop('disabled', false);

}