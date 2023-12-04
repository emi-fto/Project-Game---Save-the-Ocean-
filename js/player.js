class Player {
    constructor (gameScreen) {
        this.gameScreen = gameScreen;
        this.left = 710;
        this.top = 550;
        this.height = 50; 
        this.width = 120;
        this.element = document.createElement("img");
        this.element.src = "../img/player.png";
        this.element.style.position = "absolute"; 
        this.gameScreen.appendChild(this.element);

        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;    
    }

    move(){
        this.left +=5;
        this.top -=5;
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`; 
    }
}