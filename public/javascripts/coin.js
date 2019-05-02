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