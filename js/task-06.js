const input = document.getElementById('validation-input');
input.addEventListener('blur', validateInput);

function validateInput() {
    const inputText = input.value;
    const lengthElement = input.dataset.length;

    if (inputText.length === parseInt(lengthElement)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}