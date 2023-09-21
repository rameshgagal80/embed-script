document.addEventListener('DOMContentLoaded', function () {
    // Create a div container with the id "app"
    const app = document.createElement('div');
    app.id = 'app';
    document.body.appendChild(app);

    // Create the login form and append it to the "app" div
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
    app.appendChild(loginForm);

    // Function to simulate a successful login
    function simulateLogin() {
        // Simulate a successful login (you can replace this with actual authentication logic)
        const isLoggedIn = true;

        if (isLoggedIn) {
            // Clear the "app" div and display a modal with login data
            app.innerHTML = '';

            // Create the modal
            const modal = document.createElement('div');
            modal.id = 'modal';
            modal.style.display = 'block'; // Show the modal
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zIndex = '1000';
            modal.innerHTML = `
                <div style="background-color: white; padding: 20px; border-radius: 5px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);">
                    <h2>Login Successful</h2>
                    <p>Username: ${usernameInput.value}</p>
                    <button id="closeModalBtn">Close</button>
                </div>
            `;
            app.appendChild(modal);

            // Show a toaster message for successful login
            const toaster = document.createElement('div');
            toaster.id = 'toaster';
            toaster.textContent = 'Login Successful';
            app.appendChild(toaster);

            // After 2 seconds, show the listing with a success message
            setTimeout(function () {
                modal.style.display = 'none'; // Hide the modal
                toaster.textContent = 'Data Fetch Successful';
                fetchListingData();
            }, 2000);
        }
    }

    // Event listener for login form submission
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        simulateLogin();
    });

    // Function to fetch and display listing data
    function fetchListingData() {
        // Simulate fetching data from an API (replace with your API endpoint)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                // Clear the "app" div
                app.innerHTML = '';

                // Create the listing
                const listing = document.createElement('ul');
                listing.id = 'listing';
                listing.style.listStyle = 'none';
                listing.style.padding = '0';

                data.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = item.title;
                    listing.appendChild(listItem);
                });

                app.appendChild(listing);

                // Show a toaster message for successful data fetch
                const toaster = document.createElement('div');
                toaster.id = 'toaster';
                toaster.textContent = 'Data Fetch Successful';
                app.appendChild(toaster);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});
