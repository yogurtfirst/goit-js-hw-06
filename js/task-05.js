const targetPlace = document.querySelector("#name-output");
const textInput = document.querySelector("#name-input");

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value) {
        targetPlace.textContent = event.currentTarget.value;
    } else {
        targetPlace.textContent = "Anonymous"
    }
});