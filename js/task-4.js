const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;
    const userData = {
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    };

    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert('All form fields must be filled in');
    } else {
        console.log(userData);
        form.reset();
    }
})