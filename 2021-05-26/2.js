/* 2. C клавиатуры вводятся цифры. 
В цикле происходит проверка – если введено простое число, 
тогда происходит выход из цикла и число выводится на экране с помощью alert. */
'use strict';

let num = +prompt('Введите число', 3),
    flag = true;

if (num <= 1) flag = false;


for (let i = 2; i <= num - 1; i++)
    if (num % i == 0) {
        flag = false;
        break;
    }

if (flag == true)
    alert(`Число ${num} простое`);
else
    alert(`Число ${num} не простое`);
