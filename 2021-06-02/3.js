/* 3. Создайте массив со значениями: ‘Angular’, ‘jQuery’
Добавьте в начало массива значение ‘Backbone.js’
Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
Добавьте в массив значение ‘CommonJS’ вторым элементом
Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
 */
'use strict'

const libraries = ['Angular', 'jQuery'];

libraries.unshift('Backbone.js'); 
libraries.push('ReactJS', 'Vue.js'); 
libraries.splice(1, 0, 'CommonJS');
libraries.indexOf('jQuery');
let removed = libraries.splice(libraries.indexOf('jQuery'), 1)
alert(`${removed} - это здесь лишнее..!`)
console.log(libraries)

