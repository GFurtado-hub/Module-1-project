class Snitch {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
  
      
      this.left = 426 + Math.floor(Math.random() * (852 - 426));
      this.top = 300; 
      this.width = 20; 
      this.height = 20;
  
      
      this.element = document.createElement("img");
      this.element.src = "./images/snitch.png"; 
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
      
      this.gameScreen.appendChild(this.element);
    }
  
   
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    
    move() {
      this.top += 8; 
      this.updatePosition();
    }
  }