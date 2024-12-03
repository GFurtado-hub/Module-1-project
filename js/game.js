class Game {
  constructor() {
    this.startScreen = document.getElementById("game-start");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = null;
    this.height = 720;
    this.width = 1280;
    this.obstacles = [];
    this.snitch = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.player = new Player(
      this.gameScreen,
      600,
      500,
      60,
      60,
      "./images/harry.png"
    );
    this.audio = document.getElementById("background-music");
    this.menuAudio = document.getElementById("menu-music");
  
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.audio.volume = 0.5;
    this.audio.play();
    this.menuAudio.volume = 0.5
    this.menuAudio.pause();

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }

  gameLoop() {
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      return;
    }
    this.update();
  }

  update() {
    this.player.move();
    this.checkCollisions();
    this.checkCollisionsSnitch();
    this.updateStats();
    this.spawnObstacles();
    this.spawnSnitch();
    this.checkGameOver();
  }

  checkCollisions() {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
  
      
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
  
        
        this.lives--;
        i--;
  
      
      } else if (obstacle.top > this.height) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
      }
    }
  }
  
  checkCollisionsSnitch() {
    for (let i = 0; i < this.snitch.length; i++) {
      const snitch = this.snitch[i];
      snitch.move();
  
      
      if (this.player.didCollide(snitch)) {
        snitch.element.remove();
        this.snitch.splice(i, 1);
  
       
        this.score++;
        i--;
  
      
      } else if (snitch.top > this.height) {
        snitch.element.remove();
        this.snitch.splice(i, 1);
        i--;
      }
    }
  }
  

  
  updateStats() {
    document.getElementById("score").textContent = this.score;
    document.getElementById("lives").textContent = this.lives;
  }

  spawnObstacles() {
    if (Math.random() > 0.60 && this.obstacles.length < 2) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
  }

  spawnSnitch() {
    if (Math.random() > 0.60 && this.snitch.length < 1) {
      this.snitch.push(new Snitch(this.gameScreen));
    }
  }

  checkGameOver() {
    if (this.lives === 0) {
      this.endGame();
      this.audio.pause();
      this.audio.currentTime = 0;
      this.menuAudio.play();
    }
  }

  endGame() {
    this.player.element.remove();
    this.obstacles.forEach((obstacle) => obstacle.element.remove());
    this.snitch.forEach((snitch) => snitch.element.remove());
    this.gameIsOver = true;
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";

    document.getElementById("final-score").textContent = this.score;
  }
  
}
