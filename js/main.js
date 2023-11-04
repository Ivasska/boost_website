AOS.init();

const SwiperTestimonials = new Swiper(".SwiperTestimonials", {
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


// // ---------- Tier-Leveling ---------------
// // Получаем элементы DOM
// const quantityInput = document.getElementById('quantity');
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