class Obstacle {
    constructor(gameScreen) {
      this.gameScreen = gameScreen;
  
      // Initial position of the Bludger (same random range for X as before)
      this.left = 426 + Math.floor(Math.random() * (852 - 426)); // Random X position
      this.top = 240 + Math.floor(Math.random() * (480 - 240)); // Initial Y position
      this.width = 50;
      this.height = 70;
  
      // Random initial velocities for both X and Y movement
      this.velocityX = (Math.random() - 0.5) * 4; // Random velocity in X direction, between -2 and +2
      this.velocityY = (Math.random() - 0.5) * 4; // Random velocity in Y direction, between -2 and +2
  
      // Create the Bludger image element
      this.element = document.createElement("img");
      this.element.src = "./images/bludger.webp";
      this.element.style.position = "absolute";
      this.element.style.width = `${this.width}px`;
      this.element.style.height = `${this.height}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
  
      // Append the Bludger element to the game screen
      this.gameScreen.appendChild(this.element);
    }
  
    // Update the position of the Bludger based on its current left and top values
    updatePosition() {
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    // Move the Bludger randomly, while keeping it within the bounds of the screen
    move() {
      // Update the position by adding the velocity to the current position
      this.left += this.velocityX;
      this.top += this.velocityY;
  
      // Randomly change direction by adjusting the velocities after some time
      if (Math.random() < 0.025) {  // 2.5% chance to change direction
        this.velocityX = (Math.random() - 0.5) * 10;  // New random horizontal velocity
        this.velocityY = (Math.random() - 0.5) * 10;  // New random vertical velocity
      }
  
      // Keep the Bludger within the bounds of the game screen
      // Check left and right bounds
      if (this.left < 0) {
        this.left = 0; // Ensure it stays within the left boundary
        this.velocityX *= -1; // Reverse direction
      } else if (this.left + this.width > this.gameScreen.offsetWidth) {
        this.left = this.gameScreen.offsetWidth - this.width; // Ensure it stays within the right boundary
        this.velocityX *= -1; // Reverse direction
      }
  
      // Check top and bottom bounds
      if (this.top < 0) {
        this.top = 0; // Ensure it stays within the top boundary
        this.velocityY *= -1; // Reverse direction
      } else if (this.top + this.height > this.gameScreen.offsetHeight) {
        this.top = this.gameScreen.offsetHeight - this.height; // Adjust so that the Bludger doesn't go past the bottom
        this.velocityY *= -1; // Reverse the vertical velocity to bounce upwards
      }
  
      // Update the Bludger's position on the screen
      this.updatePosition();
    }
  }
  


