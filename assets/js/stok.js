// stok.js
document.addEventListener('DOMContentLoaded', function() {
    const stokForm = document.getElementById('stokForm');
    const stokAyamInput = document.getElementById('stokAyam');
    const currentStokAyamElement = document.getElementById('currentStokAyam');
    const deleteStokAyamButton = document.getElementById('deleteStokAyamButton');
    const deleteOneStokAyamButton = document.getElementById('deleteOneStokAyamButton');

    // Function to update the display of current stock
    function updateStokDisplay() {
        const stokAyam = parseInt(localStorage.getItem('stokAyam')) || 0;
        currentStokAyamElement.innerText = `Stok Ayam Tersedia: ${stokAyam}`;
    }

    // Call function to display current stock on page load
    updateStokDisplay();

    deleteStokAyamButton.addEventListener('click', function() {
        if (confirm('Apakah Anda yakin ingin menghapus semua stok ayam?')) {
            localStorage.removeItem('stokAyam');
            updateStokDisplay();
            alert('Stok ayam berhasil dihapus.');
        }
    });

    deleteOneStokAyamButton.addEventListener('click', function() {
        const currentStokAyam = parseInt(localStorage.getItem('stokAyam')) || 0;
        if (currentStokAyam > 0) {
            const updatedStokAyam = currentStokAyam - 1;
            localStorage.setItem('stokAyam', updatedStokAyam);
            updateStokDisplay();
            alert('1 stok ayam berhasil dihapus.');
        } else {
            alert('Stok ayam sudah habis.');
        }
    });

    // Event listener for form submission
    stokForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newStokAyam = parseInt(stokAyamInput.value);
        
        if (isNaN(newStokAyam) || newStokAyam < 0) {
            alert('Masukkan jumlah stok yang valid!');
            return;
        }

        const currentStokAyam = parseInt(localStorage.getItem('stokAyam')) || 0;
        const updatedStokAyam = currentStokAyam + newStokAyam;
        localStorage.setItem('stokAyam', updatedStokAyam);
        updateStokDisplay();
        stokAyamInput.value = '';
    });

    // Event listener for changes in localStorage (for real-time update)
    window.addEventListener('storage', function(event) {
        if (event.key === 'stokAyam') {
            updateStokDisplay();
        }
    });
});
