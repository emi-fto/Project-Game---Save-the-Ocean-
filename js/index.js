window.addEventListener("load", () => {
    const startButton = document.getElementById("startButton")
    const restartButton1 = document.getElementById("restartButton1")
    const restartButton2 = document.getElementById("restartButton2")
    
    let game;

    function startGame () {
        game = new Game ();
        game.start();
    }
      

    startButton.addEventListener("click", () => {
        startGame();
    });
    restartButton1.addEventListener("click", () => {
        restartGame();
    });

    restartButton2.addEventListener("click", () => {
        restartGame();
    });

    document.addEventListener("keydown", (event) => { 
        if (event.code === "ArrowUp") {
            game.player.directionY = -7;
        }
        if (event.code === "ArrowDown") {
            game.player.directionY = +7;
        }
        if (event.code === "ArrowLeft") {
            game.player.directionX = -7;
        }
        if (event.code === "ArrowRight") {
            game.player.directionX = +7;
        }
        if (event.code === "KeyM") {
            game.easterEgg = true; //setting the Easter Egg             
        }
        if (event.code === "KeyB") {
            game.easterEgg = false; //unsetting the Easter Egg             
        }
        if (event.code === "KeyS") {
            game.isMuted = true; //setting audio off
        }
        if (event.code === "KeyO") {
            game.isMuted = false; //setting audio on
        }
    });

    function restartGame() {
        location.reload();
    }


})