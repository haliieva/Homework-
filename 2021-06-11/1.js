/* 1. Создайте объект coffeeMachine со свойством message: 
‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start()
 – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message. */

const coffeeMachine = {
  message: 'Your coffee is ready!'
}

coffeeMachine.start = function () {
  setTimeout(() => { alert(this.message) }, 3000)
}

coffeeMachine.start()