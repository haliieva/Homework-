'use strict';

/* 5. Напишите функцию, которая в строке, состоящей из чисел, 
разделенных пробелом, находит максимальное и минимальное и возвращает их  */

let string = " ";

function highAndLow(string) {


  var arrNumbers = string.split(',').map(Number);

console.log(arrNumbers)
console.log(typeof arrNumbers[0])

}



var result = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
console.log(result); // "542 -214"