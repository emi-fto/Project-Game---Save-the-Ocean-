window.addEventListener("load", () => {
    const startButton = document.getElementById("startButton")
    const restartButton1 = document.getElementById("restartButton1")
    const restartButton2 = document.getElementById("restartButton2")
    
    let game;

    function startGame () {
        game = new Game ();
        game.start();
    }
      

    startButton.addEventListener("click", function () {
        startGame();
    });
    restartButton1.addEventListener("click", function () {
        restartGame();
    });

    restartButton2.addEventListener("click", function () {
        restartGame();
    });

    function restartGame() {
        location.reload();
    }
})