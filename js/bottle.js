class Bottle {
    constructor (gameScreen) {
        this.gameScreen = gameScreen;
        this.height = 90; 
        this.width = 90;
        this.left = (200 + Math.floor((1166-this.width) * Math.random()));
        this.top = 0;
        this.element = document.createElement("img");
        this.element.src = "img/pbottle.png";
        this.element.style.position = "absolute"; 
        
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;  

        this.gameScreen.appendChild(this.element);  
        this.counter = 1 + (setInterval(() => {
            +1
        }, 10)); // increment the speed of falling bottles but also the top, so they will go under the sea level!
    }

    move (){
        if (this.top < 619 - 130) {
            this.top += this.counter;
        } else {
            this.top = 619 - 130;
        }
        this.updatePosition();
    }

    updatePosition (){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`; 
    }
}