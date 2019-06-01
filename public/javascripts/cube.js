function rollCube() {
    document.getElementById('cube').classList.add("animation");
    setTimeout(removeClass, 3000);
}

function removeClass() {
    document.getElementById('cube').classList.remove("animation");
}