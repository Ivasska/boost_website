// --------------------------------------------- новий варіант
// ------------ shopping cart

let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
// Зробимо quantity глобальною змінною
window.quantity = document.querySelector('.shopping-quantity');
let orderNowButton = document.querySelector('.orderNow'); // Додаємо посилання на кнопку "Order now"

openShopping.addEventListener('click', () => {
	body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
	body.classList.remove('active');
});



let products = [
	{
		id: 1,
		name: 'Bronze',
		image: '../images/block/box-img-1.jpg',
		price: 100,
	},
	{
		id: 2,
		name: 'Silver',
		image: '../images/block/box-img-1.jpg',
		price: 110,
	},
	{
		id: 3,
		name: 'Gold',
		image: '../images/block/box-img-1.jpg',
		price: 120,
	},

	{
		id: 4,
		name: 'Excalibur',
		image: '../images/block/box-img-5.jpg',
		price: 100,
	},
	{
		id: 5,
		name: 'Chimera',
		image: '../images/block/box-img-5.jpg',
		price: 100,
	},
	{
		id: 6,
		name: 'Obj. 279(e)',
		image: '../images/block/box-img-5.jpg',
		price: 100,
	},

	{
		id: 7,
		name: 'Stug IV',
		image: '../images/block/box-img-6.jpg',
		price: 100,
	},
	{
		id: 8,
		name: 'T28 Concept',
		image: '../images/block/box-img-6.jpg',
		price: 100,
	},
	{
		id: 9,
		name: 'T55 A',
		image: '../images/block/box-img-6.jpg',
		price: 100,
	},
	{
		id: 10,
		name: 'Obj. 260',
		image: '../images/block/box-img-6.jpg',
		price: 100,
	},

	{
		id: 11,
		name: 'First Mark 65 %',
		image: '../images/block/box-img-7.png',
		price: 100,
	},
	{
		id: 12,
		name: 'Second Mark 85 %',
		image: '../images/block/box-img-7.png',
		price: 100,
	},
	{
		id: 13,
		name: 'Third Mark 95 %',
		image: '../images/block/box-img-7.png',
		price: 100,
	},
	{
		id: 14,
		name: 'Tanks from Clobal Map',
		image: '../images/block/box-img-7.png',
		price: 100,
	},
	{
		id: 15,
		name: 'Obj. 279(e),Chieftain etc',
		image: '../images/block/box-img-7.png',
		price: 100,
	},

	{
		id: 16,
		name: 'WN8 Boosting 3000+ (50 Battles)',
		image: '../images/block/box-img-9.png',
		price: 50,
	},
	{
		id: 17,
		name: 'WN8 Boosting 3000+ (100 Battles)',
		image: '../images/block/box-img-9.png',
		price: 100,
	},
	{
		id: 18,
		name: 'WN8 Boosting 3700+ (50 Battles)',
		image: '../images/block/box-img-9.png',
		price: 150,
	},
	{
		id: 19,
		name: 'WN8 Boosting 3700+ (100 Battles)',
		image: '../images/block/box-img-9.png',
		price: 200,
	},

	{
		id: 20,
		name: 'GLOBAL MAP BOOST',
		image: '../images/block/box-img-2.png',
		price: 125,
	}
];

let listCards = [];

function initApp() {

	// ----  НОВЕ -------------
	let filteredProducts = [];
    
    if (window.location.pathname.includes('RB.html')) {
        // Отримуємо продукти з id 1, 2 та 3
        filteredProducts = products.filter(product => [1, 2, 3].includes(product.id));
    } else if (window.location.pathname.includes('PM_9.html')) {
        // Отримуємо продукти з id 4, 5 та 6
        filteredProducts = products.filter(product => [4, 5, 6].includes(product.id));
    } else if (window.location.pathname.includes('PM_0.html')) {
			// Отримуємо продукти з id 7, 8, 9 та 10
			filteredProducts = products.filter(product => [7, 8, 9, 10].includes(product.id));
	} else if (window.location.pathname.includes('Marks.html')) {
		// Отримуємо продукти з id 7, 8, 9 та 10
		filteredProducts = products.filter(product => [11, 12, 13, 14, 15].includes(product.id));
} else if (window.location.pathname.includes('WN8.html')) {
	// Отримуємо продукти з id 7, 8, 9 та 10
	filteredProducts = products.filter(product => [16, 17, 18, 19].includes(product.id));
} else if (window.location.pathname.includes('GM.html')) {
	// Отримуємо продукти з id 7, 8, 9 та 10
	filteredProducts = products.filter(product => [20].includes(product.id));
}

		filteredProducts.forEach((value, key) => {
			let newDiv = document.createElement('div');
			newDiv.classList.add('item');
			newDiv.innerHTML = `
					<input type="checkbox" value="${value.name}" class="checkbox" id="${value.name}">
					<div class="title">${value.name}</div>
					<div class="price">$ ${value.price.toLocaleString()}</div>`;
			list.appendChild(newDiv);
	});
	

	// ----------- new -----------
	// Добавляем кнопку "Order now" после цикла, чтобы она была общей для всех товаров
	let orderButton = document.createElement('button');
	orderButton.textContent = "Order now";
	orderButton.addEventListener('click', addToCart);

	if (list) {
    list.appendChild(orderButton);
} else {
    console.error('list is not found in the DOM.');
}

	list.appendChild(orderButton);
}


document.addEventListener('DOMContentLoaded', () => {
	const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));

	if (cartProducts && cartProducts.length > 0) {
			const cartTotal = document.getElementById('cart-total');
			const cartProductsContainer = document.getElementById('cart-products');

// -------------- new
			// Отримайте елемент зі змінною кількості товарів
			const shoppingQuantity = document.querySelector('.shopping-quantity');
			// Оновіть кількість товарів у корзині
			shoppingQuantity.textContent = cartProducts.length;
// -------------- new
			
			cartProducts.forEach(product => {
					const productInfo = document.createElement('div');
					productInfo.classList.add('product-info');

					const productImage = document.createElement('img');
					productImage.src = product.image;
					productImage.alt = product.name;
					productInfo.appendChild(productImage);

					const productText = document.createElement('div');
					productText.classList.add('product-text');
					productText.textContent = `Product: ${product.name}, Price: $${product.price}`;
					productInfo.appendChild(productText);

					cartProductsContainer.appendChild(productInfo);

					// Перевірте, чи існують всі необхідні DOM-елементи на сторінці перед оновленням
			if (cartTotal) {
				cartTotal.innerText = (parseFloat(cartTotal.innerText) + product.price).toFixed(2);
			}
			});
	}
});


// Додайте функцію для оновлення кількості елементів в кошику
function updateShoppingQuantity() {
	const shoppingQuantity = document.querySelector('.shopping-quantity');
	shoppingQuantity.textContent = selectedProducts.length;
}

// const selectedProducts = [];
const selectedProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
// Функция для обработки нажатия на кнопку "Order now"
function addToCart() {
	const checkboxes = document.querySelectorAll('.checkbox');
	let totalCost = 0;

	checkboxes.forEach((checkbox) => {
			if (checkbox.checked) {
					const productName = checkbox.value;
					const productPrice = getProductPrice(productName);
					const productImage = getProductImage(productName);
					
					// Проверяем, не выбран ли продукт уже в корзине
					if (!isSelected(productName)) {
						selectedProducts.push({ name: productName, price: productPrice, image: productImage });
						totalCost += productPrice;
				}
			}
	});

	// Обновляем количество выбранных позиций в элементе <div class="shopping">
	const shoppingQuantity = document.querySelector('.shopping-quantity');
	shoppingQuantity.textContent = selectedProducts.length;

	// --------------------
// Обновляем корзину
updateCart();


// Показываем корзину
const shoppingCart = document.querySelector('.card');
shoppingCart.style.display = 'block';

// Зберігаємо обрані товари у Local Storage
localStorage.setItem('cartProducts', JSON.stringify(selectedProducts));

// Оновіть кількість товарів в кошику
updateShoppingQuantity();

// Оновіть корзину та інші елементи на сторінці
updateCart();
}

// Функция для получения изображения товара по его названию
function getProductImage(productName) {
	const product = products.find((item) => item.name === productName);
	return product ? product.image : '';
}

// Функция для проверки, выбран ли продукт уже в корзине
function isSelected(productName) {
return selectedProducts.some((product) => product.name === productName);
}

// Функция для получения цены товара по его названию
function getProductPrice(productName) {
const product = products.find((item) => item.name === productName);
return product ? product.price : 0;
}

function removeProduct(productName) {
	const productIndex = selectedProducts.findIndex((product) => product.name === productName);

	//  ---------- new
	// Отримайте елемент зі змінною кількості товарів
	const shoppingQuantity = document.querySelector('.shopping-quantity');
	// Оновіть кількість товарів у корзині
	shoppingQuantity.textContent = selectedProducts.length;
	//  ---------- new

	if (productIndex !== -1) {
			selectedProducts.splice(productIndex, 1); // Удаляем продукт из массива
		}
		// Після видалення товарів оновіть Local Storage
		localStorage.setItem('cartProducts', JSON.stringify(selectedProducts));
		// Оновіть кількість товарів в кошику
    updateShoppingQuantity();
		
		updateCart(); // Обновляем корзину
}
	// Функция для обновления корзины
function updateCart() {
    let totalCost = 0;

    const cartList = document.querySelector('.listCard');
    cartList.innerHTML = ''; // Очищаем корзину перед обновлением

    selectedProducts.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img class='images' src="${product.image}">
            <div class="title">${product.name}</div>
            <div class="price">$${product.price.toLocaleString()}</div>
            <button class="remove-button">REMOVE</button>`;
        cartList.appendChild(listItem);

        // Добавляем обработчик события для кнопки "REMOVE"
        const removeButton = listItem.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            removeProduct(product.name);
        });
        totalCost += product.price;
    });

	// Обновляем общую стоимость в корзине
	const cartTotal = document.querySelector('.total');
	cartTotal.innerHTML = `<div>Total cost: </div>$${totalCost.toLocaleString()}`; // Змінено вміст

	// Показываем корзину
	const shoppingCart = document.querySelector('.card');
	shoppingCart.style.display = 'block';
}

// Функция для проверки, выбран ли продукт уже в корзине
function isSelected(productName) {
    return selectedProducts.some((product) => product.name === productName);
}

// Функция для получения цены товара по его названию
function getProductPrice(productName) {
	const product = products.find((item) => item.name === productName);
	return product ? product.price : 0;
}



//  ------------------------------- new
// Функція для відкриття нового вікна з формою замовлення
function openOrderForm() {
	// URL сторінки для замовлення
	let orderPageUrl = 'order.html';

	// Параметри для передачі інформації про товари у форму на новій сторінці
	let orderInfo = encodeURIComponent(JSON.stringify(selectedProducts));

	// Додавання параметрів до URL
	orderPageUrl += `?products=${orderInfo}`;

	// Відкриття нового вікна зі зворотнім зв'язком та формою замовлення
	window.open(orderPageUrl, '_blank');
}

// Додавання обробника подій для кнопки "Order now"
// const orderNowButton = document.getElementById('orderNowButton');
orderNowButton.addEventListener('click', openOrderForm);
//  ------------------------------- new


initApp();