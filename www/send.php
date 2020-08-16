<?php

$fio = $_POST['name'];
$email = $_POST['phone'];
$text = $_POST['text'];


$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);


$fio = urldecode($fio);
$email = urldecode($email);
$text = urldecode($text);


$fio = trim($fio);
$email = trim($email);
$text = trim($text);
$headers = 'Content-type: text/html; charset=utf-8';

//echo $fio;
//echo "<br>";
//echo $email;

mail("leoural@yandex.ru", "Заявка с сайта", "Имя: " . $fio . ". Телефон: " . $email . ". Коментарий: " . $text, $headers);

header("Location: http://www.leo-photo.ru/form.html");
