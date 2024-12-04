class Obstacle {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
  
     
      this.left = 426 + Math.floor(Math.random() * (852 - 426)); 
      this.top = 240 + Math.floor(Math.random() * (480 - 240)); 
      this.width = 50;
      this.height = 70;
  
      
      this.velocityX = (Math.random() - 0.5) * 4; 
      this.velocityY = (Math.random() - 0.5) * 4; 
  
      
      this.element = document.createElement("img");
      this.element.src = "./images/bludger.webp";
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
      
      this.left += this.velocityX;
      this.top += this.velocityY;
  
      
      if (Math.random() < 0.025) {  
        this.velocityX = (Math.random() - 0.5) * 10;  
        this.velocityY = (Math.random() - 0.5) * 10;  
      }
  
     
      if (this.left < 0) {
        this.left = 0; 
        this.velocityX *= -1; 
      } else if (this.left + this.width > this.gameScreen.offsetWidth) {
        this.left = this.gameScreen.offsetWidth - this.width; 
        this.velocityX *= -1; 
      }
  
      
      if (this.top < 0) {
        this.top = 0; 
        this.velocityY *= -1; 
      } else if (this.top + this.height > this.gameScreen.offsetHeight) {
        this.top = this.gameScreen.offsetHeight - this.height; 
        this.velocityY *= -1; 
      }
  
      
      this.updatePosition();
    }
  }


