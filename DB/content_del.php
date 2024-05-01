<?php

$b = $_POST['name2'];
$path = './../dataSql.json';

$number = intval($b);


$data = json_decode(file_get_contents($path), true); // Декодировать содержимое файла в массив



unset($data[$number]);

// Взял массив прошел по нему и если $b == id из этого массива то удалил бы


// Закодировать обратно в JSON и сохранить в файл
file_put_contents($path, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));




?>






