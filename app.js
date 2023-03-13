const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
let breathsLeft = 3;

// Event listeners
numberOfBreaths.addEventListener("change", () => {
  breathsLeft = numberOfBreaths.value;
  breathsText.innerText = breathsLeft;
});

// a growth pattern?

// grow/shrink circle
const growCircle = () => {
  circleProgress.classList.add("circle-grow");
  setTimeout(() => {
    circleProgress.classList.remove("circle-grow");
  }, 8000);
};

// breathing instructions
const breathTextUpdate = () => {
  breathsLeft--;
  breathsText.innerText = breathsLeft;
  instructions.innerHTML = "<p>Breathe in</p>";
  setTimeout(() => {
    instructions.innerHTML = "<p>Hold Breath</p>";
    setTimeout(() => {
      instructions.innerHTML = "<p>Exhale Breath Slowly</p>";
    }, 4000);
  }, 4000);
};

// breathing app function
const breathingApp = () => {
  const breathingAnimation = setInterval(() => {
    if (breathsLeft === 0) {
      clearInterval(breathingAnimation);
      instructions.innerHTML =
        "<p>Breathing session completed. Click 'Begin' to start a new session.</p>";
      start.classList.remove("button-inactive");
      breathsLeft = numberOfBreaths.value;
      breathsText.innerText = breathsLeft;
      return;
    }
    growCircle();
    breathTextUpdate();
  }, 12000);
};

// start breathing
start.addEventListener("click", () => {
  start.classList.add("button-inactive");
  instructions.innerHTML = "<p>Get relaxed and ready to begin breathing</p>";
  setTimeout(() => {
    instructions.innerHTML = "<p>Breathing is about to begin...</p>";
    setTimeout(() => {
      breathingApp();
      growCircle();
      breathTextUpdate();
    }, 2000);
  }, 2000);
});
