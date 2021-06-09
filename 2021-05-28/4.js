'use strict';

/* 4. Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный ранее объект person, 
добавляя dt - для имени свойства и dd - для значения свойства (работа с DOM - с использованием методов Native JS). */


const person = {
  name: 'Sasha',
  age: 25,
  sex: 'male'
};

let element = document.createElement('div');
document.body.appendChild(element)

let nodeList = document.createElement('dl')
element.appendChild(nodeList)

for (let key in person) {
  console.log(person[key])

  let nodeTitle = document.createElement('dt');
  nodeList.appendChild(nodeTitle)
  nodeTitle.innerText = key;

  let nodeDefinition = document.createElement('dd')
  nodeTitle.appendChild(nodeDefinition)
  nodeDefinition.innerText = person[key];

}
/* for (let checkObjProperty in person) {

  checkObjProperty = prompt('Введите имя свойства: ')

  if (checkObjProperty in person) {
    alert(person[checkObjProperty])
  } else if (checkObjProperty) {
    person[checkObjProperty] = prompt('Введите значение свойства: ')
  } else break;

}  */
// можно убрать или оставить проверку или добавление новых свойств, они также отобразяться в структуре элементов на странице
