/* 3. Создайте объект array с методом инициализации начального значения массива, 
c методами добавления, удаления последнего элемента массива 
и методом возврата текущего состояния массива. Используйте концепцию chaining для создания цепочки вызовов. */

const array = {
value:  [],

  // setValue: function() { this.value.setValue();
  // return this}, 
  push: function () {this.value.push();
  return this},
  pop: function () {this.value.pop();
    return this}, 

  getValue: function () {this.value;
    return this}
};

array
// .setValue([1])
.push(2)
.push(3)
.push(3)
.pop();

var currentValue = array.getValue();
console.log(currentValue); // [1, 2, 3]