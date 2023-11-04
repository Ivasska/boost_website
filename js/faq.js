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