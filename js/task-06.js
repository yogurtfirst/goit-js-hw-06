const formEl = document.querySelector("#validation-input");
formEl.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(formEl.dataset.length)) {
        formEl.classList.remove('invalid');
        formEl.classList.add('valid');
    } else {
        formEl.classList.remove('valid');
        formEl.classList.add('invalid');
    }
})