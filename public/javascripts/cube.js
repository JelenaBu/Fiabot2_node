function rollCube() {
    document.getElementById('cube').classList.add("animation");
    setTimeout(removeClass, 3000);
    // Disable roll button
    $('button.rollCubeBtn').prop('disabled', true);
    // Enable next button
    $('button.nextButton').prop('disabled', false);
}

function removeClass() {
    document.getElementById('cube').classList.remove("animation");
}