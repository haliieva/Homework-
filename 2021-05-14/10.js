'use strict';

let height_1 = parseInt(prompt('Enter value', '30px')),
    height_2 = parseInt(prompt('Enter value', '140px')),
    height_3 = parseInt(prompt('Enter value', '50px')),

    maxHeight = Math.max(height_1, height_2, height_3);

alert('Tallest column: ' + maxHeight + 'px')

