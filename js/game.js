class Game {
    constructor() {
      this.startScreen = document.getElementById("game-start");
      this.gameScreen = document.getElementById("game-screen");
      this.gameEndScreen = document.getElementById("game-end");
      this.height = 600;
      this.width = 500;
      this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000/60);
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

    this.update()

    if( this.gameIsOver) {
        clearInterval(this.gameIntervalId)
    }
}


}