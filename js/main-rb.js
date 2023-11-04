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

// -------------- Background Image Move on Mousemove
$('.header__content').mousemove(function (e) {
	let moveX = (e.pageX * -1 / 905);
	let moveY = (e.pageY * -1 / 15);
	$(this).css('background-position', moveX + 'px ' + moveY + 'px')
});


//  --------------- RB -----------
// Находим все чекбоксы и элементы с ценами
// const checkboxes = document.querySelectorAll('.checkbox');
// const prices = document.querySelectorAll('.price-box');
// const totalPrice = document.querySelector('.total-price span');

// // Обработчик изменения состояния чекбоксов
// function updateTotalPrice() {
// 	let total = 0;
// 	for (let i = 0; i < checkboxes.length; i++) {
// 		if (checkboxes[i].checked) {
// 			total += parseFloat(prices[i].textContent);
// 		}
// 	}
// 	totalPrice.textContent = total.toFixed(2); // Отображаем общую стоимость с двумя знаками после запятой
// }

// // Добавляем обработчик события для каждого чекбокса
// checkboxes.forEach((checkbox) => {
// 	checkbox.addEventListener('change', updateTotalPrice);
// });

// // Инициализируем общую стоимость при загрузке страницы
// updateTotalPrice();


// ------------ shopping cart
// let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', () => {
// 	body.classList.add('active');
// })
// closeShopping.addEventListener('click', () => {
// 	body.classList.remove('active');
// })