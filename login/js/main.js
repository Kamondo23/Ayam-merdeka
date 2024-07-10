document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah submit form yang sebenarnya

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin@gmail.com' && password === 'admin123') {
        window.location.href = '/assets/page/admin.html';
    } else {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === username && user.password === password);

        if (user) {
            window.location.href = '/assets/page/user.html';
        } else {
            document.getElementById('message').textContent = 'Username atau password salah!';
        }
    }
});
