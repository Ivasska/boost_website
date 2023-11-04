<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $tel = $_POST['tel'];
  $email = $_POST['email'];
  $messenger = $_POST['Messenger']; // Отримуємо значення зі списку
	$message = $_POST['message'];

  // Відправка пошти або збереження в базу даних
  // Наприклад, ви можете відправити листа на електронну пошту:
  $to = 'info@yozhykwotboost.space';  // Адреса отримувача
  $subject = 'New Contact Form Submission';
  $body = "Name: $name\nPhone: $tel\nEmail: $email\nMessenger: $messenger\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    $response = array('success' => true, 'message' => 'Thank you! We will contact you soon to confirm the order and clarify the details.');
  } else {
    $response = array('success' => false, 'message' => 'Error sending the message. Please try again later.');
  }

  echo json_encode($response);
}
?>