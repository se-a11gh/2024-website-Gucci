<?php
// Запись нового значение в файл
$a = $_POST['name1'];
$path = './../dataSql.json';


if (file_exists($path)) { // Проверить, существует ли файл
} else {
  file_put_contents($path, '[]');  // Добавит(а не заменит) новый контент в массив
}

$data = json_decode(file_get_contents($path), true); // Декодировать содержимое файла в массив
$data[] = $a;// Добавить новое значение к массиву

// Закодировать обратно в JSON и сохранить в файл
file_put_contents($path, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));

?>






