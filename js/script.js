window.onload = function () {
  const gameMusic = document.getElementById("quidditch-music");  
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const difficultyButtons = document.querySelectorAll("#difficulty-selection button");
  let game;
  let selectedDifficulty = "Medium"; 
  let musicHasPlayed = false;  

  
  function playGameMusic() {
    if (!musicHasPlayed) {
      
      gameMusic.play().catch((error) => {
        console.log("Music play failed due to autoplay restrictions:", error);
      });
      musicHasPlayed = true;  
    } else {
      
      gameMusic.currentTime = 0;  
      gameMusic.play().catch((error) => {
        console.log("Music play failed due to autoplay restrictions:", error);
      });
    }
  }

  
  startButton.addEventListener("click", function () {
    playGameMusic();  
    startGame();      
  });

  
  restartButton.addEventListener("click", function () {
    game.gameEndScreen.style.display = "none";
    game.startScreen.style.display = "block";  

    
    if (game.menuAudio) {
      game.menuAudio.pause();  
      game.menuAudio.currentTime = 0;  
    }

    
    playGameMusic();
  });

  
  difficultyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      selectedDifficulty = this.id; 
      difficultyButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });

  
  function startGame() {
    console.log("start game");
    game = new Game();

    game.setDifficulty(selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1));
    game.start();

    
    gameMusic.pause();
    
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

  
  window.addEventListener('click', function () {
    if (!musicHasPlayed) {
      playGameMusic();
    }
  });
};
