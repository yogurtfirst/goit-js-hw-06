let counterValue = 0;
const value = document.querySelector('#value');
const buttonInc = document.querySelector('button[data-action="increment"]');
const buttonDec = document.querySelector('button[data-action="decrement"]');

buttonInc.addEventListener("click", () => {
    counterValue += 1;
    value.textContent = counterValue;
});
buttonDec.addEventListener("click", () => {
    counterValue -= 1;
    value.textContent = counterValue;
});