class Snitch {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;

    // Initial position of the Snitch
    this.left = 426 + Math.floor(Math.random() * (852 - 426)); // Random X position within a screen range
    this.top = 240 + Math.floor(Math.random() * (480 - 240));
    this.width = 20; 
    this.height = 20;

    // Random initial velocities for the Snitch's movement
    this.velocityX = (Math.random() - 0.5) * 4; // Random velocity in X direction, between -2 and +2
    this.velocityY = (Math.random() - 0.5) * 4; // Random velocity in Y direction, between -2 and +2

    // Get the dimensions of the game screen
    this.gameScreenWidth = gameScreen.offsetWidth;
    this.gameScreenHeight = gameScreen.offsetHeight;

    // Create the Snitch image element
    this.element = document.createElement("img");
    this.element.src = "./images/snitch.png"; 
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    // Set the initial position
    this.updatePosition();

    // Append the Snitch element to the game screen
    this.gameScreen.appendChild(this.element);
  }

  // Update the position of the Snitch based on its current left and top values
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  // Move the Snitch randomly, keeping it within the bounds of the game screen
  move() {
    // Update the position by adding the velocity to the current position
    this.left += this.velocityX;
    this.top += this.velocityY;

    // Randomly change direction by adjusting the velocities after some time
    if (Math.random() < 0.025) {  // 25% chance to change direction
      this.velocityX = (Math.random() - 0.5) * 10;  // New random horizontal velocity
      this.velocityY = (Math.random() - 0.5) * 10;  // New random vertical velocity
    }

    // Keep the Snitch within the bounds of the game screen
    // Check left and right bounds
    if (this.left < 0) {
      this.left = 0; // Ensure it stays within the left boundary
      this.velocityX *= -1; // Reverse direction
    } else if (this.left + this.width > this.gameScreenWidth) {
      this.left = this.gameScreenWidth - this.width; // Ensure it stays within the right boundary
      this.velocityX *= -1; // Reverse direction
    }

    // Check top and bottom bounds
    if (this.top < 0) {
      this.top = 0; // Ensure it stays within the top boundary
      this.velocityY *= -1; // Reverse direction
    } 
    // For bottom edge bounce
    else if (this.top + this.height > this.gameScreenHeight) {
      this.top = this.gameScreenHeight - this.height; // Adjust so that the Snitch doesn't go past the bottom
      this.velocityY *= -1; // Reverse the vertical velocity to bounce upwards
    }

    // Update the Snitch's position on the screen
    this.updatePosition();
  }
}
