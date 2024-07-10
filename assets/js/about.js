// Function to get the current queue number from localStorage
function getQueueNumber() {
    let currentQueueNumber = parseInt(localStorage.getItem('currentQueueNumber')) || 0;
    return currentQueueNumber;
}

// Function to set the next queue number to localStorage
function setQueueNumber(number) {
    localStorage.setItem('currentQueueNumber', number);
}

document.addEventListener('DOMContentLoaded', function() {
    // Update input nomor antrian pada halaman load pertama kali
    const currentQueueNumber = getQueueNumber();
    document.getElementById('queueInput').placeholder = `No. Antrian: ${currentQueueNumber + 1}`;

    // Function to display available stock of Ayam
    const stokAyamElement = document.getElementById('stokAyamUser');
    const stokAyam = parseInt(localStorage.getItem('stokAyam')) || 0;
    stokAyamElement.innerText = `Stok Ayam Tersedia: ${stokAyam}`;

    // Function to add prices to select options
    function addPricesToOptions() {
        const minumanOptions = [
            { value: '', text: 'Pilih Minuman', price: 0, disabled: true },
            { value: 'Es Teh', text: 'Es Teh - Rp. 5,000', price: 5000 },
            { value: 'Markisa Squash', text: 'Markisa Squash - Rp. 10,000', price: 10000 },
            { value: 'Melon Mojito', text: 'Melon Mojito - Rp. 10,000', price: 10000 },
            { value: 'Amer', text: 'Amer - Rp. 10,000', price: 10000 },
            { value: 'Sprite', text: 'Sprite - Rp. 8,000', price: 8000 },
            { value: 'Fanta', text: 'Fanta - Rp. 8,000', price: 8000 },
            { value: 'Es Jeruk', text: 'Es Jeruk - Rp. 7,000', price: 7000 },
            { value: 'Timun Squash', text: 'Timun Squash - Rp. 10,000', price: 10000 },
            { value: 'Moca Cola', text: 'Moca Cola - Rp. 10,000', price: 10000 },
            { value: 'Coca Cola', text: 'Coca Cola - Rp. 5,000', price: 5000 },
            { value: 'Air Mineral Botol', text: 'Air Mineral Botol - Rp. 5,000', price: 5000 },
            { value: 'Air Mineral Gelas', text: 'Air Mineral Gelas - Rp. 1,000', price: 1000 }
        ];

        const makananOptions = [
            { value: '', text: 'Pilih Makanan', price: 0, disabled: true },
            { value: 'Ayam Bakar+Nasi+Sambal Bawang', text: 'Ayam Bakar+Nasi+Sambal Bawang - Rp. 23,000', price: 23000 },
            { value: 'Ayam Goreng+Nasi+Sambal Bawang', text: 'Ayam Goreng+Nasi+Sambal Bawang - Rp. 23,000', price: 23000 },
            { value: 'Amer+Nasi+Saus Keju', text: 'Amer+Nasi+Saus Keju - Rp. 18,000', price: 18000 },
            { value: 'Ayam Krispi+Nasi+Saus Sambel', text: 'Ayam Krispi+Nasi+Saus Sambel - Rp. 13,000', price: 13000 },
            { value: 'Ayam Geprek+Nasi+Sambel Merah/Ijo', text: 'Ayam Geprek+Nasi+Sambel Merah/Ijo - Rp. 13,000', price: 13000 },
            { value: 'Telur Kriwil+Nasi+Sambel Merah/Ijo', text: 'Telur Kriwil+Nasi+Sambel Merah/Ijo - Rp. 12,000', price: 12000 },
            { value: 'Ayam Bakar/Goreng+Sambel Bawang', text: 'Ayam Bakar/Goreng+Sambel Bawang - Rp. 24,000', price: 24000 },
            { value: 'Ayam Krispi/Geprek+Sambal Merah/Ijo', text: 'Ayam Krispi/Geprek+Sambal Merah/Ijo - Rp. 21,000', price: 21000 }
        ];

        const tambahanOptions = [
            { value: '', text: 'Pilih Tambahan', price: 0, disabled: true },
            { value: 'Telur Kriwil', text: 'Telur Kriwil - Rp. 7,000', price: 7000 },
            { value: 'Nasi Putih', text: 'Nasi Putih - Rp. 3,000', price: 3000 },
            { value: 'Hati Ampla', text: 'Hati Ampla - Rp. 3,000', price: 3000 },
            { value: 'Leher', text: 'Leher - Rp. 3,000', price: 3000 },
            { value: 'Ceker', text: 'Ceker - Rp. 1,000', price: 1000 },
            { value: 'Tahu', text: 'Tahu - Rp. 1,000', price: 1000 },
            { value: 'Kerupuk Kulit/Ikan', text: 'Kerupuk Kulit/Ikan - Rp. 5,000', price: 5000 },
            { value: 'Kerupuk Biasa', text: 'Kerupuk Biasa - Rp. 2,000', price: 2000 }
        ];

        const paketanOptions = [
            { value: '', text: 'Pilih Paketan', price: 0, disabled: true },
            { value: 'Paket Ayam Bakar/Goreng', text: 'Paket Ayam Bakar/Goreng - Rp. 25,000', price: 25000 },
            { value: 'Paket Amer', text: 'Paket Amer - Rp. 20,000', price: 20000 },
            { value: 'Paket Krispi/Geprek', text: 'Paket Krispi/Geprek - Rp. 15,000', price: 15000 }
        ];

        populateSelectOptions('minuman', minumanOptions);
        populateSelectOptions('makanan', makananOptions);
        populateSelectOptions('tambahan', tambahanOptions);
        populateSelectOptions('paketan', paketanOptions);
    }

    // Function to populate select options
    function populateSelectOptions(selectId, options) {
        const selectElement = document.getElementById(selectId);
        selectElement.innerHTML = ''; // Clear existing options

        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.text = option.text;
            optionElement.dataset.price = option.price; // Store price in data attribute
            selectElement.appendChild(optionElement);
        });
    }

    // Function to update price based on selected menu
    function updatePrice() {
        const minumanSelect = document.getElementById('minuman');
        const makananSelect = document.getElementById('makanan');
        const tambahanSelect = document.getElementById('tambahan');
        const paketanSelect = document.getElementById('paketan');

        const minumanPrice = parseFloat(minumanSelect.options[minumanSelect.selectedIndex].dataset.price) || 0;
        const makananPrice = parseFloat(makananSelect.options[makananSelect.selectedIndex].dataset.price) || 0;
        const tambahanPrice = parseFloat(tambahanSelect.options[tambahanSelect.selectedIndex].dataset.price) || 0;
        const paketanPrice = parseFloat(paketanSelect.options[paketanSelect.selectedIndex].dataset.price) || 0;

        const satuanMinuman = parseFloat(document.getElementById('satuan_minuman').value) || 1;
        const satuanMakanan = parseFloat(document.getElementById('satuan_makanan').value) || 1;
        const satuanTambahan = parseFloat(document.getElementById('satuan_tambahan').value) || 1;
        const satuanPaketan = parseFloat(document.getElementById('satuan_paketan').value) || 1;

        // Hitung total harga berdasarkan satuan untuk setiap kategori
        const totalHarga = (minumanPrice * satuanMinuman) + (makananPrice * satuanMakanan) + (tambahanPrice * satuanTambahan) + (paketanPrice * satuanPaketan);

        // Set nilai harga di input readonly
        document.getElementById('harga').value = totalHarga.toFixed(2);
    }

    // Event listener untuk setiap select dan input satuan
    document.getElementById('minuman').addEventListener('change', updatePrice);
    document.getElementById('makanan').addEventListener('change', updatePrice);
    document.getElementById('tambahan').addEventListener('change', updatePrice);
    document.getElementById('paketan').addEventListener('change', updatePrice);
    document.getElementById('satuan_minuman').addEventListener('input', updatePrice);
    document.getElementById('satuan_makanan').addEventListener('input', updatePrice);
    document.getElementById('satuan_tambahan').addEventListener('input', updatePrice);
    document.getElementById('satuan_paketan').addEventListener('input', updatePrice);

    // Event listener untuk form submit
    document.getElementById('queueForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah submit form default

        let queueCounter = getQueueNumber() + 1; // Tambahkan nomor antrian

        const queueInput = document.getElementById('queueInput'); // Ambil elemen input nomor antrian

        // Ambil nilai dari form
        const minuman = document.getElementById('minuman').value;
        const makanan = document.getElementById('makanan').value;
        const tambahan = document.getElementById('tambahan').value;
        const paketan = document.getElementById('paketan').value;

        const satuanMinuman = parseFloat(document.getElementById('satuan_minuman').value);
        const satuanMakanan = parseFloat(document.getElementById('satuan_makanan').value);
        const satuanTambahan = parseFloat(document.getElementById('satuan_tambahan').value);
        const satuanPaketan = parseFloat(document.getElementById('satuan_paketan').value);
        const harga = parseFloat(document.getElementById('harga').value);

        // Buat objek order
        const order = {
            noAntrian: queueCounter,
            minuman,
            makanan,
            tambahan,
            paketan,
            satuanMinuman,
            satuanMakanan,
            satuanTambahan,
            satuanPaketan,
            harga // Simpan total harga
        };

        // Simpan ke localStorage
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));

        // Simpan nomor antrian terbaru ke localStorage
        setQueueNumber(queueCounter);

        // Tampilkan nomor antrian di input placeholder
        queueInput.placeholder = `No. Antrian: ${queueCounter}`;

        // Tampilkan alert dengan nomor antrian
        alert(`Terima kasih! Nomor antrian Anda adalah ${queueCounter}.`);

        // Reset form setelah submit
        document.getElementById('queueForm').reset();
        document.getElementById('harga').value = ''; // Kosongkan harga
    });

    // Call function to add prices to options
    addPricesToOptions();
});
