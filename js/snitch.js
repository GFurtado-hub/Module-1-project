class Obstacle {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
      // Random initial position on the screen (within the gameScreen boundaries)
      this.left = Math.floor(Math.random() * (gameScreen.offsetWidth - 50));  
      this.top = Math.floor(Math.random() * (gameScreen.offsetHeight - 50));
      this.width = 25;
      this.height = 25;
      this.element = document.createElement("img2");
  
      this.element.src = "./images/snitch.jpg";  
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
      this.gameScreen.appendChild(this.element);
  
      
      this.horizontalSpeed = Math.random() * 2 - 1;  
      this.verticalSpeed = Math.random() * 2 - 1;    
    }
  
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
   
  }