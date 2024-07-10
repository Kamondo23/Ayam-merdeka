// Function to load and display orders from localStorage
function loadOrders() {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    const orderTable = document.getElementById('orderTable');
    const totalKeuntunganElement = document.getElementById('totalKeuntungan');

    // Clear table before adding new data
    orderTable.innerHTML = '';

    let totalKeuntungan = 0;

    if (orders.length === 0) {
        // Display "No orders" message if there are no orders
        const noOrderMessage = document.createElement('tr');
        noOrderMessage.innerHTML = '<td colspan="7" style="text-align: center;">Tidak ada pesanan</td>';
        orderTable.appendChild(noOrderMessage);
    } else {
        orders.forEach((order, index) => {
            const row = document.createElement('tr');

            const noAntrianCell = document.createElement('td');
            noAntrianCell.textContent = order.noAntrian;
            row.appendChild(noAntrianCell);

            const minumanCell = document.createElement('td');
            minumanCell.textContent = order.minuman;
            row.appendChild(minumanCell);

            const makananCell = document.createElement('td');
            makananCell.textContent = order.makanan;
            row.appendChild(makananCell);

            const tambahanCell = document.createElement('td');
            tambahanCell.textContent = order.tambahan;
            row.appendChild(tambahanCell);

            const paketanCell = document.createElement('td');
            paketanCell.textContent = order.paketan;
            row.appendChild(paketanCell);

            const hargaCell = document.createElement('td');
            hargaCell.textContent = order.harga.toFixed(2); // Display harga with 2 decimal places
            row.appendChild(hargaCell);

            const deleteCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Hapus';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => deleteOrder(index));
            deleteCell.appendChild(deleteButton);
            row.appendChild(deleteCell);

            orderTable.appendChild(row);

            // Add order price to totalKeuntungan
            totalKeuntungan += order.harga;
        });
    }

    // Update total keuntungan in the table footer
    if (totalKeuntunganElement) {
        totalKeuntunganElement.textContent = `Rp ${totalKeuntungan.toFixed(2)}`;
    }
}

// Function to initialize the admin dashboard
function initializeAdmin() {
    loadOrders(); // Load orders when page loads
}

// Function to delete an order
function deleteOrder(index) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1); // Remove item from array
    localStorage.setItem('orders', JSON.stringify(orders)); // Update localStorage with modified array
    loadOrders(); // Reload orders in the table
}

// Load orders when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAdmin();
});
