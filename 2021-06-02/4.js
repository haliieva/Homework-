'use strict';

/* 4. Создайте строку с текстом ‘Как Однажды Жак Звонарь Сломал Городской Фонарь’. 
Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). 
Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.*/

let str = 'Как Однажды Жак Звонарь Сломал Городской Фонарь';
//должно быть Как Однажды Жак Звонарь Городской Сломал Фонарь

let newSrt = str.split(' ');
let result = newSrt.splice(4, 1);

newSrt.splice(5, 0, result)
str = newSrt.join(' ');

console.log(str)
