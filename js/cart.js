document.addEventListener('DOMContentLoaded', () => {
	const orderInfo = localStorage.getItem('orderInfo');
	if (orderInfo) {
		const decodedOrderInfo = JSON.parse(decodeURIComponent(orderInfo));
    // Робота з decodedOrderInfo як з JSON-об'єктом

			// Отримуємо елементи DOM для відображення інформації
			const productNameElement = document.getElementById('productName');
			const productPriceElement = document.getElementById('productPrice');
			const productImageElement = document.getElementById('productImage');

			// Оновлюємо відображення інформації
			productNameElement.textContent = `Назва товару: ${decodedOrderInfo.name}`;
			productPriceElement.textContent = `Ціна: $${decodedOrderInfo.price}`;
			productImageElement.src = decodedOrderInfo.image;
	}
});