'use strict';

/* 1. Level up. Не используя методы массива, напишите функцию аналог метода shift. 
Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.  */

const arr = [1, 2, 3, 4],
  newArr = [];

function shift(arr) {

  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log('Исходный массив', arr);
console.log('Новцй массив', shift([...arr]));
