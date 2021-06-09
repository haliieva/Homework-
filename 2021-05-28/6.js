/* 6. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
прочитанными из prompt (например: brand, model, resolution, color...). 
Добавьте этот гаджет персоне, созданной ранее. После этого создайте независимую копию объекта person, 
не используя встроенный метод Object.assign и JSON.parse, а то есть перебором свойств.*/

'use strict';

const phoneModel = {
  brand: prompt('Введите бренд телефона'),
  model: prompt('Введите модель телефона'),
  color: prompt('Введите цвет телефона'),
  resolution: prompt('Введите разрешение телефона')

}

const person = {
  name: 'Sasha',
  age: 25,
  phone: phoneModel
};

const personCopy = {};

for (let key in person) {
  personCopy[key] = person[key];
}

person.name = 'Roma';
console.log(person)
console.log(personCopy)