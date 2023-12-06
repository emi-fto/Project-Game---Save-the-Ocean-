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
            game.player.directionY = -5;
        }
        if (event.code === "ArrowDown") {
            game.player.directionY = +5;
        }
        if (event.code === "ArrowLeft") {
            game.player.directionX = -5;
        }
        if (event.code === "ArrowRight") {
            game.player.directionX = +5;
        }
        if (event.code === "KeyM") {
            game.bottles.forEach(bottle => bottle.element.src = "img/money.png"); //setting the Easter Egg
        }
    });

    function restartGame() {
        location.reload();
    }


})