const startBtn = document.querySelector(".startButton");
const counter = document.querySelector(".count");
const minCount = document.querySelector(".minCount");
const score = document.querySelector(".score");

const carrot = document.querySelector(".carrot");
const bug = document.querySelector(".bug");

const img = document.querySelector("img");

let count = 0;

window.addEventListener("DOMContentLoaded", () => {
  const carrotPosition = Math.random(Math.random() * 1000);
  const bugPosition = Math.random(Math.random() * 1000);

  // carrot.style.top = carrotPosition;
  // carrot.style.left = carrotPosition;
  // bug.style.top = bugPosition;
  // bug.style.left = bugPosition;
});

startBtn.addEventListener("click", counterStart);

function counterStart() {
  let time = 10;
  setInterval(() => {
    time--;

    if (time < 0) {
      return;
    }

    minCount.innerHTML = time;
  }, 1000);
}

function handleCount(items) {
  if (items === "bug") {
    return gameCancel();
  }
  return increaseCount(count);
}

function increaseCount(count) {
  count++;
  score.innerHTML = count;
}

function gameCancel() {
  const div = document.querySelector("div");
  div.setAttribute("class", "failGame");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = "pink";
}
