window.onload = function () {
    const gameMusic = document.getElementById("game-music");
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const difficultyButtons = document.querySelectorAll("#difficulty-selection button");
    let game;
    let selectedDifficulty = "Medium"; 
  
    
    difficultyButtons.forEach((button) => {
      button.addEventListener("click", function () {
        selectedDifficulty = this.id; 
        difficultyButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
      });
    });
  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", function () {
    game.gameEndScreen.style.display = "none";
    game.startScreen.style.display = "block";  
    game.audio.currentTime = 0;
    game.menuAudio.play();
  });

  
  function startGame() {
    console.log("start game");
    game = new Game();

    game.setDifficulty(selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1));
    
    game.start();
  }
  function handleKeydown(event) {
    const key = event.key;
    const possibleKeystrokes = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
    ];
    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();
      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -3;
          break;
        case "ArrowUp":
          game.player.directionY = -3;
          break;
        case "ArrowRight":
          game.player.directionX = 3;
          break;
        case "ArrowDown":
          game.player.directionY = 3;
          break;
      }
    }
  }
  window.addEventListener("keydown", handleKeydown);
};