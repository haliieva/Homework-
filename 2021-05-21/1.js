/* 1. Создайте блок-схему, описывающую алгоритм поиска минимального из трех 
чисел. Запишите алгоритм программно: создайте три переменные с любыми
числовыми значениями; используя только вложенные условные операторы if 
(НЕ логические операторы), найдите минимальное число и отобразите на 
экране его значение. */

let a = 5,
    b = 105,
    c = 0.3;

let min = a;
if (b < a) {
    min = b;
} else if (c < a) {
    min = c;
}

alert('Минимальное из трех чисел: ' + min)

//	let min = a < b ? (a < c ? a : c)  : (b < c ? b : c);
