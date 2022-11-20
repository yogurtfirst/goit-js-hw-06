const formEl = document.querySelector("#font-size-control");
const targetEl = document.querySelector("#text");
formEl.addEventListener("input", (event) => {
    targetEl.style.fontSize = event.currentTarget.value + 'px';
})