document.addEventListener('DOMContentLoaded', function () {

        // Create the button
        const button = document.createElement('button');
        button.id = 'showModalBtn';
        button.textContent = 'Show Modal';

        // Create the modal
        const modal = document.createElement('div');
        modal.id = 'modal';
        modal.style.display = 'none';
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
                <h2>Modal Content</h2>
                <p>This is a modal dialog.</p>
                <button id="closeModalBtn">Close</button>
            </div>
        `;

        // Create the toaster
        const toaster = document.createElement('div');
        toaster.id = 'toaster';
        toaster.style.display = 'none';
        toaster.style.position = 'fixed';
        toaster.style.top = '10px';
        toaster.style.right = '10px';
        toaster.style.backgroundColor = '#333';
        toaster.style.color = 'white';
        toaster.style.padding = '10px';
        toaster.style.borderRadius = '5px';
        toaster.style.zIndex = '1000';
        toaster.textContent = 'Toaster Message';

        // Create the login form
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

        // Create the listing
        const listing = document.createElement('ul');
        listing.id = 'listing';
        listing.style.listStyle = 'none';
        listing.style.padding = '0';

        // Append the elements to the 'app' div
        const app = document.getElementById('app');
        app.appendChild(button);
        app.appendChild(modal);
        app.appendChild(toaster);
        app.appendChild(loginForm);
        app.appendChild(listing);

        // Show the modal when the button is clicked
        button.addEventListener('click', function () {
            modal.style.display = 'block';
        });

        // Close the modal when the "Close" button is clicked
        modal.addEventListener('click', function (event) {
            if (event.target.id === 'closeModalBtn') {
                modal.style.display = 'none';
            }
        });

        // Simulate fetching data from an API (replace with your API endpoint)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = item.title;
                    listing.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

        // Show the toaster
        toaster.style.display = 'block';

        // Hide the toaster after 3 seconds
        setTimeout(function () {
            toaster.style.display = 'none';
        }, 3000);
      })
