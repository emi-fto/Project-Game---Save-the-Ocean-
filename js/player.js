class Player {
    constructor (gameScreen) {
        this.gameScreen = gameScreen;
        this.left = 710;
        this.top = 520;
        this.height = 50; 
        this.width = 120;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.element.src = "img/player.png";
        this.element.style.position = "absolute"; 
        
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`; 
        
        this.gameScreen.appendChild(this.element);   
    }

    move(){
        if (this.left >= 200) { //  adding the xAxis limits
            this.left += this.directionX;
        } else {
            this.left = 200;
        }
        if (this.left <= 1366 - this.width ) {
            this.left += this.directionX;
        } else {
            this.left = 1366 - this.width;
        }

        if (this.top >= 0) { // addint the yAxis limits
            this.top += this.directionY;
        } else {
            this.top = 0;
        }
        if (this.top <= 619 - this.height - 49) {
            this.top += this.directionY;
        } else {
            this.top = 619 - this.height - 49;
        }
        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`; 
    }

}