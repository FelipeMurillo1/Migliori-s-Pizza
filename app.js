document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('order-form');
    const orderSummary = document.getElementById('order-summary');
    const totalDiv = document.querySelector('.total');

    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
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
        
        // Mostrar el resumen y el total
        totalDiv.classList.remove('hidden');
        orderSummary.textContent = summary;
    });
});
