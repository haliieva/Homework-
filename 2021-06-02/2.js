'use strict';

/* 2. Создайте массив из минимум 100 случайных целых чисел. Переберите массив и сгенерируйте на его основе новый, 
который содержит только уникальные (неповторяющиеся) значения исходного массива. Решите задачу, используя только цикл for. */

let arr = [];
for (var i = 0, n = 100; i < n; i++) { //создание массива из 100 случайных чисел
  arr.push(Math.round(Math.random() * n))
} 


let newArr = [];

for (var i = 0, l = arr.length; i < l; i++)
  if (newArr.indexOf(arr[i]) === -1 && arr[i] !== '')
  newArr.push(arr[i]);

console.log(newArr)
console.log(arr)
