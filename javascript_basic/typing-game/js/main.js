window.addEventListener("load", function () {
  const GAME_TIME = 9;

  let score = 0;
  let time = GAME_TIME;
  let isPlaying = false;
  let timeInterval;
  let words = [];

  const wordDisplay = document.querySelector(".word-display");
  const wordInput = document.querySelector(".word-input");
  const scoreDisplay = document.querySelector(".score");
  const timeDisplay = document.querySelector(".time");
  const button = document.querySelector(".button");

  const init = () => {
    getWords();
  };

  const getWords = () => {
    words = ["Hello", "Banana", "Apple", "Cherry"];
  };

  const buttonChange = (text) => {
    button.innerText = text;
    text === "Game Start"
      ? button.classList.remove("loading")
      : button.classList.add("loading");
  };
  const countDown = () => {
    time > 0 ? time-- : (isPlaying = false);
    if (isPlaying) {
      buttonChange("playing");
    }
    if (!isPlaying) {
      clearInterval(timeInterval);
      buttonChange("Game Start");
    }
    timeDisplay.innerText = time;
  };

  wordInput.addEventListener("input", (e) => {
    if (e.target.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
      score++;
      scoreDisplay.innerText = score;
      wordInput.value = "";
      time = GAME_TIME;
    }
  });

  button.addEventListener("click", () => {
    isPlaying = true;
    time = GAME_TIME;
    score = 0;
    scoreDisplay.innerText = score;
    timeInterval = setInterval(countDown, 1000);
  });
  init();
  buttonChange("Game Start");
});
