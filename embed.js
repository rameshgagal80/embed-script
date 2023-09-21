document.addEventListener('DOMContentLoaded', function () {
            const app = document.getElementById('app');
            const toaster = document.getElementById('toaster');
            const loginModal = document.getElementById('loginModal');
            const modalUsername = document.getElementById('modalUsername');
            const modalPassword = document.getElementById('modalPassword');
            const closeModalButton = document.getElementById('closeModal');

            // Function to create and display the login form
            function displayLoginForm() {
                const loginForm = document.createElement('form');
                loginForm.id = 'loginForm';

                const usernameInput = document.createElement('input');
                usernameInput.type = 'text';
                usernameInput.placeholder = 'Username';
                usernameInput.name = 'username';
                usernameInput.required = true;

                const passwordInput = document.createElement('input');
                passwordInput.type = 'password';
                passwordInput.placeholder = 'Password';
                passwordInput.name = 'password';
                passwordInput.required = true;

                const submitButton = document.createElement('button');
                submitButton.type = 'submit';
                submitButton.textContent = 'Login';

                loginForm.appendChild(usernameInput);
                loginForm.appendChild(passwordInput);
                loginForm.appendChild(submitButton);

                loginForm.addEventListener('submit', function (e) {
                    e.preventDefault();

                    // Simulate a successful login (you can replace this with actual authentication logic)
                    const isLoggedIn = true;

                    if (isLoggedIn) {
                        // Show the modal with login details
                        modalUsername.textContent = usernameInput.value;
                        modalPassword.textContent = passwordInput.value;
                        loginModal.style.display = 'block';

                        // Show the toaster for a successful login
                        toaster.style.display = 'block';

                        // Clear the form inputs
                        usernameInput.value = '';
                        passwordInput.value = '';
                    }
                });

                app.appendChild(loginForm);
            }

            // Initial display: Show the login form
            displayLoginForm();

            // Close the modal when the "Close" button is clicked
            closeModalButton.addEventListener('click', function () {
                loginModal.style.display = 'none';
            });

            // Hide the toaster after a few seconds
            setTimeout(function () {
                toaster.style.display = 'none';
            }, 3000);
        });
