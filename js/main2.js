document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');
    const shippingFee = 520;
    const orderTotalElement = document.getElementById('order-total');

    // 初期の金額計算
    updateTotalPrice();

    cartItems.forEach((item) => {
        const minusButton = item.querySelector('.minus');
        const plusButton = item.querySelector('.plus');
        const quantityInput = item.querySelector('.quantity');
        const price = parseInt(item.getAttribute('data-price'));

        // 数量減少
        minusButton.addEventListener('click', function () {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 0) { // ここで数量が0未満にならないように制限
                quantity -= 1;
                quantityInput.value = quantity;
                updateTotalPrice();
            }
        });

        // 数量増加
        plusButton.addEventListener('click', function () {
            let quantity = parseInt(quantityInput.value);
            quantity += 1;
            quantityInput.value = quantity;
            updateTotalPrice();
        });
    });

    // 合計金額の更新
    function updateTotalPrice() {
        let totalPrice = 0;

        cartItems.forEach((item) => {
            const quantity = parseInt(item.querySelector('.quantity').value);
            const price = parseInt(item.getAttribute('data-price'));
            totalPrice += quantity * price;
        });

        totalPriceElement.textContent = totalPrice.toLocaleString();
        orderTotalElement.textContent = (totalPrice + shippingFee).toLocaleString();
    }
});
