AOS.init();

const swiper = new Swiper(".swiper", {
	parallax: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});

// ---------- SPOLLERS --------


const boxes = Array.from(document.querySelectorAll(".block__item")); // считываем все элементы аккордеона в массив

boxes.forEach((box) => {
	box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
});

function boxHandler(e) {
	e.preventDefault(); // сбрасываем стандартное поведение
	let currentBox = e.target.closest(".block__item"); // определяем текущий бокс
	let currentContent = e.target.nextElementSibling; // находим скрытый контент
	currentBox.classList.toggle("active"); // присваиваем ему активный класс
	if (currentBox.classList.contains("active")) {
		// если класс активный ..
		currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
	} else {
		// в противном случае
		currentContent.style.maxHeight = 0; // скрываем контент
	}
}



// ---------- Tier-Leveling ---------------
// Получаем элементы DOM
const plusButton = document.querySelector('.plus-btn');
const minusButton = document.querySelector('.minus-btn');
const priceSpan = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const tierlevelingOrderNowButton = document.querySelector('.content__box-btn');
const productList = document.getElementById('productList');
const totalCost = document.getElementById('totalCost');

function updateDisplay() {
    let quantity = parseInt(quantityInput.value);
    let totalPrice = calculatePrice(quantity);
    
    priceSpan.textContent = totalPrice + "$";
}

function calculatePrice(quantity) {
    if (quantity >= 2 && quantity <= 9) {
        return 120 - (quantity - 1) * 5;
    } else {
        return 120;
    }
}

plusButton.addEventListener('click', () => {
    let quantity = parseInt(quantityInput.value);
    quantity = Math.min(9, quantity + 1);
    quantityInput.value = quantity;
    console.log('Increased quantity. New quantity:', quantity);
    updateDisplay();
});

minusButton.addEventListener('click', () => {
    let quantity = parseInt(quantityInput.value);
    quantity = Math.max(1, quantity - 1);
    quantityInput.value = quantity;
    console.log('Decreased quantity. New quantity:', quantity);
    updateDisplay();
});

tierlevelingOrderNowButton.addEventListener('click', () => {
    const productName = "Tank Grinding to Any Tier 10";
    const price = calculatePrice(parseInt(quantityInput.value));
    // console.log('Product added to cart. Product:', productName, 'Price:', price);

    // Створюємо DOM-елемент для товару
    const productItem = document.createElement('li');
    productItem.classList.add('productItem');


		const productInfo = {
			name: productName,
			price: price,
			image: '../images/block/box-img-3.png'  // Шлях до зображення товару
	};
    // Створюємо зображення товару
    const productImage = document.createElement('img');
    productImage.src = '../images/block/box-img-3.png';
    // productImage.alt = productName;

    // Додаємо назву товару
    const productNameElement = document.createElement('p');
    productNameElement.classList.add('productName');
    productNameElement.innerText = productName;

    // Додаємо ціну товару
    const productPriceElement = document.createElement('p');
    productPriceElement.classList.add('price');
    productPriceElement.innerText = `$${price}`;

    // Створюємо кнопку "Remove"
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerText = 'Remove';


		// Додаємо обробник події на кнопку "Remove"
removeButton.addEventListener('click', () => {
	// Видаляємо батьківський елемент (продукт) зі списку продуктів
	productList.removeChild(productItem);
	updateTotalCost(-price);
});

    // Додаємо всі елементи до DOM
    productItem.appendChild(productImage);
    productItem.appendChild(productNameElement);
    productItem.appendChild(productPriceElement);
    productItem.appendChild(removeButton);

    // Додаємо товар до списку продуктів у корзині
    productList.appendChild(productItem);

		updateTotalCost(price);

    const card = document.querySelector('.card');
    card.style.display = 'block';

		// Створюємо URL з параметрами запиту, додаючи інформацію про товар
    const url = `order.html?products=${encodeURIComponent(JSON.stringify([productInfo]))}`;

    // Переходимо на сторінку замовлення
    window.location.href = url;
});

function updateTotalCost(price) {
	let currentTotal = parseFloat(totalCost.innerText.replace("Total cost: $", "")) || 0;
	currentTotal = Math.max(0, currentTotal + price);
	totalCost.innerText = "Total cost: $" + currentTotal;
}

updateDisplay();




















// const plusButton = document.querySelector('.plus-btn');
// const minusButton = document.querySelector('.minus-btn');
// const priceSpan = document.getElementById('price');

// // Устанавливаем начальные значения счетчика и цены
// let quantity = 1;
// let price = 120; // Начальная цена

// // Функция для обновления отображаемых значений
// function updateDisplay() {
// 	// Устанавливаем максимальное и минимальное значение счетчика
// 	if (quantity < 1) {
// 		quantity = 1;
// 	} else if (quantity > 9) {
// 		quantity = 9;
// 	}
	
// 	// Вычисляем цену в соответствии с заданными условиями
// 	if (quantity >= 2 && quantity <= 9) {
// 		price = 120 - (quantity - 1) * 5;
// 	} else {
// 		price = 120;
// 	}
	
// 	// Обновляем отображение
// 	quantityInput.value = quantity;
// 	priceSpan.textContent = price + "$";
// }

// // Обработчик события для кнопки "+"
// plusButton.addEventListener('click', () => {
// 	quantity++;
// 	updateDisplay();
// });

// // Обработчик события для кнопки "-"
// minusButton.addEventListener('click', () => {
// 	quantity--;
// 	updateDisplay();
// });

// // Инициализация отображения
// updateDisplay();