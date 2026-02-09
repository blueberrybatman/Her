// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.style.position = "absolute";

function moveNoButton() {
  const padding = 30;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// desktop
noBtn.addEventListener("mouseenter", moveNoButton);
// mobile
noBtn.addEventListener("touchstart", moveNoButton);
// Logic to make YES btn to grow

// Logic to make YES btn grow + shake (FIXED)


let yesScale = 1;

// RESET any leftover centering
yesBtn.style.position = "relative";
yesBtn.style.transform = "scale(1)";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.25s ease";

noBtn.addEventListener("click", () => {
  yesScale += 0.3;

  yesBtn.style.transform = `scale(${yesScale})`;

  yesBtn.animate(
    [
      { transform: `scale(${yesScale}) rotate(0deg)` },
      { transform: `scale(${yesScale}) rotate(2deg)` },
      { transform: `scale(${yesScale}) rotate(-2deg)` },
      { transform: `scale(${yesScale}) rotate(0deg)` }
    ],
    { duration: 250, easing: "ease-in-out" }
  );
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
