function makeBubbles() {
  let bubbles = "";

  for (let i = 1; i <= 152; i++) {
    bubbles += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector(".game-window").innerHTML = bubbles;
}
makeBubbles();
let timerint = 5;
function timer() {
  let timerval = document.querySelector("#timer");
  let timerinterval = setInterval(() => {
    if (timerint > 0) {
      timerint--;
      timerval.textContent = timerint;
    } else {
      clearInterval(timerinterval);
      document.querySelector(".game-window").innerHTML = "<h3>Game Over !</h3>"
    }
  }, 1000);
}
timer()

function scoreUpdate() {
  let score = document.querySelector("#score-val");
  let scoreVal = Number(score.textContent);
  scoreVal += 10;
  score.textContent = scoreVal;
}

function hitValUpdate() {
  let hitVal = document.querySelector("#hit-val");
  hitVal.textContent = Math.floor(Math.random() * 10);
}
hitValUpdate()

let gameWindow = document.querySelector(".game-window");
gameWindow.addEventListener("click", (event) => {
  let hitVal = document.querySelector("#hit-val");
  if (timerint > 0) {
    if (event.target.textContent == hitVal.textContent) {
      scoreUpdate();
    }
    makeBubbles();
    hitValUpdate();
  }
});
