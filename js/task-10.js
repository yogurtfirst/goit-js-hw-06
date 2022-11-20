function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const targetBoxes = document.querySelector("#boxes");

const createBoxes = (event) => {
  targetBoxes.innerHTML = '';
  let size = 30;
  let boxes = "";

  for (let i = 0; i < input.value; i += 1) {
    boxes += `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`;
    size += 10;
  }
  targetBoxes.insertAdjacentHTML("afterbegin", boxes);
} 

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", () => {
  targetBoxes.innerHTML = '';
});
