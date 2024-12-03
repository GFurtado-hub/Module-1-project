window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const playMusicButton = document.getElementById("play-music-button");
  const backgroundMusic = document.getElementById("background-music");
  const menuMusic = document.getElementById("menu-music");
  const quidditchMusic = document.getElementById("quidditch-music");
  let game;

  // Play the Quidditch World Cup music when the play music button is clicked
  playMusicButton.addEventListener("click", function () {
    quidditchMusic.play();
  });

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    game.gameEndScreen.style.display = "none";
    game.startScreen.style.display = "block";

    // Stop and reset the background music
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;

    // Stop and reset the menu music
    menuMusic.pause();
    menuMusic.currentTime = 0;

    // Optionally, start the menu music again if you want it to play in the main menu
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