'use strict';

let num = parseInt(prompt('Enter a number', '5')),
    numCheck = num % 2;

alert(!!numCheck) // true - нечетное, false - четное