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



// --------------- Credits -----------
const switchInput = document.getElementById('switch');
        const totalPriceElement = document.getElementById('price');
        const orderButton = document.querySelector('.order-button');
        const minusButton = document.querySelector('.minus-btn');
        const plusButton = document.querySelector('.plus-btn');

        orderButton.addEventListener('click', () => {
            const quantity = parseInt(switchInput.value, 10);
            const totalCost = quantity * 3; // Assuming $3 per unit

            // Додаємо вибраний товар та його ціну в корзину
            selectedProducts.push({ name: 'Credit Package', price: totalCost, image: '../images/block/box-img-4.png' });

            // Обновляємо корзину
            updateCart();

            // Обновляємо общу стоімість в корзині
            const cartTotal = document.querySelector('.total');
            cartTotal.textContent = `$${totalCost.toLocaleString()}`;
        });

        minusButton.addEventListener('click', () => {
            const currentValue = parseInt(switchInput.value, 10);
            if (currentValue > 1) {
                switchInput.value = currentValue - 1;
                updateTotalPrice();
            }
        });

        plusButton.addEventListener('click', () => {
            const currentValue = parseInt(switchInput.value, 10);
            switchInput.value = currentValue + 1;
            updateTotalPrice();
        });

        function updateTotalPrice() {
            const quantity = parseInt(switchInput.value, 10);
            const totalCost = quantity * 3; // Assuming $3 per unit
            totalPriceElement.textContent = totalCost;
        }
