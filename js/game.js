class Game {
    constructor () {
        this.startScreen = document.getElementById("gameIntro")
        this.gameScreen = document.getElementById("gameContainer")
        this.endScreen1 = document.getElementById("gameEnd1")
        this.endScreen2 = document.getElementById("gameEnd2")
        this.score = 0;
        this.lives = 3;
        this.player = null;
        this.bottles = [];
    }

    start() {
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.player = new Player (this.gameScreen);
        this.gameLoop();
        this.bottles.push(new Bottle (this.gameScreen));
    }

    gameLoop () {
        this.player.move();
        this.bottles.forEach(bottle => bottle.move());
        requestAnimationFrame(() => this.gameLoop());
    }
} 