// // Отримуємо вибрані товари з localStorage
// const encodedData = localStorage.getItem('orderInfo');
// const decodedData = decodeURIComponent(encodedData);
// const selectedProducts = JSON.parse(decodedData) || [];
// const cartProducts = document.getElementById('cart-products');

// // Очистити вміст перед відображенням нових товарів
// cartProducts.innerHTML = '';
// console.log('Hello from order.js');

// // Відображаємо інформацію про вибрані товари
// selectedProducts.forEach(product => {
//     const productInfo = document.createElement('div');
//     productInfo.innerHTML = `
//             <p>Name: ${product.name}</p>
//             <p>Price: $${product.price.toLocaleString()}</p>
//             <img src="${product.image}" alt="${product.name}">
//     `;
//     cartProducts.appendChild(productInfo);
// });



// -----------------------
document.addEventListener('DOMContentLoaded', () => {
	const params = new URLSearchParams(window.location.search);
    const orderInfo = params.get('products');

		if (orderInfo) {
			const products = JSON.parse(decodeURIComponent(orderInfo));
			// -------
			localStorage.setItem('cartProducts', JSON.stringify(products));

			// Отримайте елементи форми, де ви хочете відобразити інформацію
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const telInput = document.getElementById('tel');
        // const textArea = document.getElementById('text');
        const cartTotal = document.getElementById('cart-total');

			// Отримайте елемент для відображення інформації про товари
			const cartProducts = document.getElementById('cart-products');
			// const selectedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

			// Відобразіть інформацію про товари у формі
			products.forEach(product => {

					// Відобразіть інформацію про товар у блоку cart-products
					const productInfo = document.createElement('div');
					productInfo.classList.add('product-info');

					// Додайте зображення товару
					const productImage = document.createElement('img');
					productImage.src = product.image;
					productImage.alt = product.name;
					productInfo.appendChild(productImage);

					// Додайте інформацію про товар
					const productText = document.createElement('div');
					productText.classList.add('product-text');
					productText.textContent = `Product: ${product.name}, Price: $${product.price}`;
					productInfo.appendChild(productText);

					cartProducts.appendChild(productInfo);

					// Підрахунок загальної вартості
					cartTotal.innerText = (parseFloat(cartTotal.innerText) + product.price).toFixed(2);

			});
	};
});