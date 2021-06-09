'use strict';

/*7. С помощью деструктуризации сохраните свойство phone объекта-копии 
в переменную с именем gadget. Добавьте поля объекта gadget в созданный ранее список <dl>*/


const phoneModel = {
  brand: prompt('Введите бренд телефона', 'iPhone'),
  model: prompt('Введите модель телефона', 'SE'),
  color: prompt('Введите цвет телефона', 'black'),
  flashMemory: +prompt('Введите флеш-память', 128)

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

let { phone: gadget } = personCopy;



let element = document.createElement('div');
document.body.appendChild(element)


let nodeList = document.createElement('dl')
element.appendChild(nodeList)


for (let key in gadget) {
  console.log(gadget[key])


  let nodeTitle = document.createElement('dt');
  nodeList.appendChild(nodeTitle)
  nodeTitle.innerText = key;

let nodeDefinition = document.createElement('dd')
nodeTitle.appendChild(nodeDefinition)
nodeDefinition.innerText = gadget[key];



}

personCopy.name = 'Dima'
console.log(person)
console.log(personCopy)
console.log(gadget)