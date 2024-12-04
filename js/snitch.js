class Snitch {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    
    this.left = 426 + Math.floor(Math.random() * (852 - 426)); 
    this.top = 240 + Math.floor(Math.random() * (480 - 240));
    this.width = 20; 
    this.height = 20;

    
    this.velocityX = (Math.random() - 0.5) * 4; 
    this.velocityY = (Math.random() - 0.5) * 4; 

    
    this.gameScreenWidth = gameScreen.offsetWidth;
    this.gameScreenHeight = gameScreen.offsetHeight;

    
    this.element = document.createElement("img");
    this.element.src = "./images/snitch.png"; 
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    
    this.updatePosition();

    
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
    } else if (this.left + this.width > this.gameScreenWidth) {
      this.left = this.gameScreenWidth - this.width; 
      this.velocityX *= -1; 
    }

    
    if (this.top < 0) {
      this.top = 0; 
      this.velocityY *= -1; 
    } 
    
    else if (this.top + this.height > this.gameScreenHeight) {
      this.top = this.gameScreenHeight - this.height; 
      this.velocityY *= -1; 
    }


    this.updatePosition();
  }
}

