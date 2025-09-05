document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;
    const errorMessage = document.getElementById('errorMessage');

    // Reset error message
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    // Basic validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters.';
        errorMessage.style.display = 'block';
        return;
    }

    // Simulate role-based redirection (replace with actual logic)
    switch (role) {
        case 'student':
            window.location.href = '../html/student.html';
            break;
        case 'alumni':
            window.location.href = '../html/alumni.html';
            break;
        case 'college':
            window.location.href = '../html/college.html';
            break;
        default:
            errorMessage.textContent = 'Invalid role selected.';
            errorMessage.style.display = 'block';
    }
});