const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    const valueInput = nameInput.value;

    if (valueInput === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = valueInput
    }
});

