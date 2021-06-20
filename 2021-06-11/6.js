/* 6. Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя
userFormat('<<<', '>>>'); // <<<John>>>

Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind(). */

const user = {
  name: prompt('Enter name')
}

function format(start, end) {
  console.log(start + this.name + end);
}

let userFormat = (start, end) => format.call(user, start, end); 
// let userFormat = format.bind(user); 
userFormat('<<<', '>>>'); // <<<John>>>