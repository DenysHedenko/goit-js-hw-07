const textFromUser = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');

textFromUser.addEventListener('input', () => {
    const trimValue = textFromUser.value.trim();

    if (trimValue === "") {
        spanText.textContent = "Anonymous";
    } else {
        spanText.textContent = trimValue;
    };
})