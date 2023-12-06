class Game {
    constructor () {
        this.startScreen = document.getElementById("gameIntro")
        this.gameScreen = document.getElementById("gameContainer")
        this.endScreen1 = document.getElementById("gameEnd1")
        this.endScreen2 = document.getElementById("gameEnd2")
        this.score = 0;
        this.lives = 10;
        this.numBot = 0;
        this.g = 0;
        this.player = null;
        this.bottles = [];
        this.animatedId = null;
        this.isGameOver = false;
    }

    start() {
        this.startScreen.style.display = "none";
        this.gameScreen.style.display = "block";
        this.player = new Player (this.gameScreen);
        this.gameLoop();
    }

    gameLoop () {
        this.player.move();
        document.getElementById("score").innerText = this.score;
        document.getElementById("lives").innerText = this.lives;
        if (this.lives <= 0) {this.isGameOver = "true"}
        document.getElementById("numBot").innerText = this.numBot;
        document.getElementById("g").innerText = this.g; 
        const nextBottles = [] 
        this.bottles.forEach(bottle => {
            bottle.move()
            if(bottle.top <= 619 - 130) {
                if (this.player.didCollide(bottle)){
                    bottle.element.remove();
                    this.score +=1;
                    this.numBot +=1;
                    this.g += 20; // average weight of a bottle = 20g.
                } else {                
                nextBottles.push(bottle) // no increment in the array size
                }
            } else {
                setInterval(() => {
                    bottle.element.remove() // bottles will float on the ocean level for a while
                }, 5000);
                this.lives -=1;
            } 
        });
        this.bottles = nextBottles; 
        if (this.animatedId % 100 === 0) {
            this.bottles.push(new Bottle (this.gameScreen));
        }

        if (this.isGameOver && this.score >= 10) {
            this.gameScreen.style.display = "none";
            this.endScreen1.style.display = "flex";
        }
        else if (this.isGameOver && this.score < 10) {
            this.gameScreen.style.display = "none";
            this.endScreen2.style.display = "flex";
        } else {
            this.animatedId = requestAnimationFrame(() => this.gameLoop());
        }
    }
} 