// JavaScript код для обробки форми зворотнього зв'язку
function submitContactForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const tel = document.getElementById('tel').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
	const messenger = document.querySelector('select[name="Messenger"]');
	const selectedMessenger = messenger.options[messenger.selectedIndex].value;

  if (!name || !tel || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Отримання даних та відправка на сервер
  const formData = new FormData();
  formData.append('name', name);
  formData.append('tel', tel);
  formData.append('email', email);
  formData.append('message', message);
	formData.append('Messenger', selectedMessenger);

  fetch('process_contact_form.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Thank you! We will contact you soon to confirm the order and clarify the details.');
    } else {
      alert('Error sending the message. Please try again later.');
    }
  })
  .catch(error => console.error('Error:', error));
}

// JavaScript код для обробки форми замовлення товару
function submitOrderForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const tel = document.getElementById('tel').value;
  const message = document.getElementById('message').value;
	// Отримайте інформацію про товари з локального сховища
	const products = JSON.parse(localStorage.getItem('cartProducts'));

  if (!name || !email || !tel || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Отримання даних та відправка на сервер
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('tel', tel);
  formData.append('message', message);
	formData.append('products', JSON.stringify(products));

  fetch('process_order_form.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Thank you! We will contact you soon to confirm the order and clarify the details.');
    } else {
      alert('Error sending the message. Please try again later.');
    }
  })
  .catch(error => console.error('Error:', error));
}

// Навішуємо обробники подій на форми
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', submitContactForm);

const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', submitOrderForm);