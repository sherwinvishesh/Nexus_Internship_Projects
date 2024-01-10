function toggleForms() {
    var loginForm = document.getElementById('login-form');
    var signupForm = document.getElementById('signup-form');

    if (loginForm.classList.contains('hidden')) {
        // Switch to Login Form
        loginForm.classList.remove('hidden', 'opacity-0');
        signupForm.classList.add('hidden', 'opacity-0');
    } else {
        // Switch to Signup Form
        loginForm.classList.add('hidden', 'opacity-0');
        signupForm.classList.remove('hidden', 'opacity-0');
    }
}

function validateLoginForm() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    // Simple validation (you can customize this based on your requirements)
    if (email === '' || password === '') {
        displayErrorMessage('login-form', 'Please fill in all fields.');
    } else if (!validateEmail(email)) {
        displayErrorMessage('login-form', 'Please enter a valid email address.');
    } else {
        // Your login logic here
        alert('Login successful!');
    }
}

function validateSignupForm() {
    var name = document.getElementById('signup-name').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    // Simple validation (you can customize this based on your requirements)
    if (name === '' || email === '' || password === '') {
        displayErrorMessage('signup-form', 'Please fill in all fields.');
    } else if (!validateEmail(email)) {
        displayErrorMessage('signup-form', 'Please enter a valid email address.');
    } else {
        // Your signup logic here
        alert('Sign Up successful!');
    }
}

function displayErrorMessage(formId, message) {
    var errorElement = document.createElement('div');
    errorElement.className = 'text-red-500 text-sm mb-2 error-message';
    errorElement.innerText = message;

    var form = document.getElementById(formId);
    var existingError = form.querySelector('.error-message');
    if (existingError) {
        form.removeChild(existingError);
    }
    form.appendChild(errorElement);
}

function validateEmail(email) {
    // Simple email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
