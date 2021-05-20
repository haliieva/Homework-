'use strict';

let initialApples = +prompt('Enter value', '30'),
    eatenApples = +prompt('Enter value', '30'),

    leftApples = initialApples - eatenApples;

alert(!!leftApples) // false - Цзэн-Цзы говорит ложь, он съел все яблоки
// true - Цзэн-Цзы говорит правду, яблоки остались