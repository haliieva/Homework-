/* 2. Создайте функцию hello(), которая выводит приветствие пользователю. 
Создайте два объекта, содержащие поля firstname, lastname. 
Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально. */

var hello = function() {
  alert(`${'Привет ' + this.firstname + ' ' + this.lastname + '!'}`);
};

const user1 = {
  firstname: 'Петя',
  lastname: 'Петровский'
}

const user2 = {
  firstname: 'Иван',
  lastname: 'Ивановский'
}

hello.call(user1);
hello.call(user2);