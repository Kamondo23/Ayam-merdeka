document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah submit form yang sebenarnya

    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert('Email sudah terdaftar!');
    } else {
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registrasi berhasil! Silakan login.');
        window.location.href = '/login/index.html';
    }
});
