document.addEventListener('DOMContentLoaded', function () {
            const app = document.getElementById('testing-script');

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
                        app.innerHTML = ''; // Clear the app container
                        displayListing();
                    }
                });

                app.appendChild(loginForm);
            }

            // Function to fetch and display the listing data
            function displayListing() {
                // Simulate fetching data from an API (replace with your API endpoint)
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(data => {
                        const listing = document.createElement('ul');
                        listing.id = 'listing';

                        data.forEach(item => {
                            const listItem = document.createElement('li');
                            listItem.textContent = item.title;
                            listing.appendChild(listItem);
                        });

                        app.appendChild(listing);
                    })
                    .catch(error => {
                        console.error('Error fetching data:', error);
                    });
            }

            // Initial display: Show the login form
            displayLoginForm();
        });
