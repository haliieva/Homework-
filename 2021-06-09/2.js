/* 2. Напишите функцию checkNumber, которая получает на вход 
как параметр массив любых значений и возвращает true, если все элементы - числа, 
и false - если в массиве хотя бы  одно не число. 
Для проверки массива используйте метод every или some */

let arr = [];

const checkNumber = arr => arr.every(function(elem) {
  return !isNaN(elem)
});

console.log(checkNumber([1, 2, '3', 'a'])); // false
console.log(checkNumber([1, 2, '3', '4'])); // true


