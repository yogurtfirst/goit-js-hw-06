function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

button.addEventListener("click", (event) => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
})