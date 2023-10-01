const preventForm = document.querySelector('.login-form');

preventForm.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const emailInput = ev.target.elements.email;
    const passwordInput = ev.target.elements.password;
    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
        alert("Всі поля повинні бути заповнені.");
    } else {
        const objectValue = {
            email: emailInput.value,
            password: passwordInput.value,
        }
        console.log(objectValue);
        ev.target.reset();
    }

});

