class Game {
    constructor() {
      this.startScreen = document.getElementById("game-start");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.player = null;
      this.height = 720;
      this.width = 1280;
      this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000/60);
    this.player = new Player(
        this.gameScreen,
        600,
        500,
        60,
        60,
        "./images/harry.png"
    );
    
    }

    start() {
        this.gameScreen.style.height = `${this.height}px`;

        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = "none";

        this.gameScreen.style.display = "block";

        this.gameIntervalId = setInterval(() => {
            this.gameLoop()
          }, this.gameLoopFrequency)

        }
        gameLoop() {
            console.log("in the game loop");
            
            this.update();
        
            
            if (this.gameIsOver) {
              clearInterval(this.gameIntervalId)
            }
          }
        
          
            update() {
                this.player.move();
            
                
                for (let i = 0; i < this.obstacles.length; i++) {
                  const obstacle = this.obstacles[i];
                  obstacle.move();
            
                 
                  if (this.player.didCollide(obstacle)) {
                    
                    obstacle.element.remove();
                    
                    this.obstacles.splice(i, 1);
                    
                    this.lives--;
                    
                    i--;
                  } 
                  else if (obstacle.top > this.height) {
                    
                    this.score++;
                    
                    obstacle.element.remove();
                    
                    this.obstacles.splice(i, 1);
                    
                    i--;
                  }


                  
                }
            
                
                if (this.lives === 0) {
                  this.endGame();
                }
            
                
                if (Math.random() > 0.60 && this.obstacles.length < 2) {
                  this.obstacles.push(new Obstacle(this.gameScreen));
                }





              }
            
              // Create a new method responsible for ending the game
              endGame() {
                this.player.element.remove();
                this.obstacles.forEach(obstacle => obstacle.element.remove());
            
                this.gameIsOver = true;
            
                // Hide game screen
                this.gameScreen.style.display = "none";
                // Show end game screen
                this.gameEndScreen.style.display = "block";
              }
            
            }
        
            