document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('testing-script');
    
    // Create the login form
    const loginForm = document.createElement('form');
    loginForm.id = 'loginForm';

    // Create the username input
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Username';
    usernameInput.name = 'username';
    usernameInput.required = true;

    // Create the password input
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.name = 'password';
    passwordInput.required = true;

    // Create the submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Login';

    // Append form elements to the form
    loginForm.appendChild(usernameInput);
    loginForm.appendChild(passwordInput);
    loginForm.appendChild(submitButton);

    // Append the form to the app container
    app.appendChild(loginForm);

    // Add a form submission event listener
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        
        // Get the form data
        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');

        // You can now make an API call with the username and password
        // For this example, we'll just display them in an alert
        alert(`Username: ${username}\nPassword: ${password}`);
    });
});
