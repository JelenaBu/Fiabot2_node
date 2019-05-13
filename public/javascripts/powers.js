
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