function fetchData() {
    return fetch('data.json')
        .then((response) => response.json())
        .catch((error) =>{
            alert("An error has occured", error);
        });
}

function login() {
    // Fetch input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check authentication
    fetchData()
        .then(data => {
            const user = checkAuthentication(username, password, data);

            // Redirect based on role
            if (user) {
                if (user.role === 'client') {
                    window.location.href = 'client.html';
                } else if (user.role === 'admin') {
                    window.location.href = 'admin.html';
                }
            } else {
                alert('Your username or password is wrong! Please try again!');
            }
        });
}

function checkAuthentication(username, password, data) {
    // Mock authentication using the provided JSON
    const users = data.login;

    // Find user in the array
    return users.find(user => user.username === username && user.password === password);
}