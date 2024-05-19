
document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('order-form');
    const orderSummary = document.getElementById('order-summary');
    const totalDiv = document.querySelector('.total');

    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const customerType = document.getElementById('customer-type').value;
        const orderType = document.getElementById('order-type').value;
        const tableNumber = document.getElementById('table-number').value;
        const menuItems = document.querySelectorAll('.menu-item-checkbox');

        let selectedItems = [];
        let totalPrice = 0;

        menuItems.forEach(item => {
            if (item.checked) {
                const itemName = item.getAttribute('data-name');
                const itemPrice = parseFloat(item.getAttribute('data-price'));
                selectedItems.push({ name: itemName, price: itemPrice });
                totalPrice += itemPrice;
            }
        });

        // Crear el resumen del pedido
        let summary = '';
        selectedItems.forEach(item => {
            summary += `${item.name} - $${item.price.toFixed(2)}\n`;
        });
        summary += `\nTotal: $${totalPrice.toFixed(2)}`;

        // Añadir información de la mesa si está disponible
        if (customerType === 'Mesero' && tableNumber) {
            summary += `\nNúmero de Mesa: ${tableNumber}`;
        }

        // Mostrar el resumen y el total
        totalDiv.classList.remove('hidden');
        orderSummary.textContent = summary;
    });
});
