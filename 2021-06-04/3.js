'use strict';

/* 3. Используя синтаксис ES5, напишите функцию-аналог Math.min(). 
Функция принимает любое количество чисел и возвращает меньшее из них: */

function min() {
  const numbers = [...arguments];

  let minNumber = numbers.reduce(function (acc, num) {
    if (num < acc) return acc = num;
    return acc;
  }, numbers[0]);

  return minNumber;
}

console.log(min(0, -1, 100, 500, 100500)); // -1
console.log(min(0, 0, 100, 500, -2));