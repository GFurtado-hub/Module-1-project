window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const backgroundMusic = document.getElementById("background-music");
  const menuMusic = document.getElementById("menu-music");
  
  let game;

  

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    game.gameEndScreen.style.display = "none";
    game.startScreen.style.display = "block";

    
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;

    
    menuMusic.pause();
    menuMusic.currentTime = 0;

    
    menuMusic.play();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
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