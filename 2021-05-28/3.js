'use strict';

/* 3. Создайте объект person, описывающий персону, 
с произвольным количеством произвольных полей. 
Запустите цикл, в котором через prompt запрашивается имя свойства. 
С помощью оператора in или typeof проверьте наличие в объекте этого свойства,
и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением,
которое также запрашивается из prompt. Выйти из цикла и закончить проверки можно с помощью клавиши Cancel окна prompt. */


const person = {
  name: 'Sasha',
  age: 25,
  sex: 'male'
};

for (let checkObjProperty in person) {

  checkObjProperty = prompt('Введите имя свойства: ')

  if (checkObjProperty in person) {
    alert(person[checkObjProperty])
  } else if (checkObjProperty) {
    person[checkObjProperty] = prompt('Введите значение свойства: ')
  } else break;

}
console.log(person)
