document.getElementById('loginForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let valid = true;

    // Username validation using switch
    switch (true) {
        case (username.length < 5):
            alert('Username should have at least 5 characters long.');
            valid = false;
            break;
        default:
            break;
    }

    // Password validation using switch
    switch (true) {
        case (password.length < 8):
            alert('Password should be at least 8 characters long.');
            valid = false;
            break;
        default:
            break;
    }

    // Prevent form submission if validation fails
    if (!valid) {
        event.preventDefault();
    }
});