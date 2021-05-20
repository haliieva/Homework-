'use strict';

let num = +prompt('Enter a number in bits to convert', '1');

const byte = num / 8,
    kilobyte = num / 8000,
    megabyte = num / 8e+6,
    gigabyte = num / 8e+9;


alert('Число в байтах: ' + byte)
alert('Число в килобайтах: ' + kilobyte)
alert('Число в мегабайтах: ' + megabyte)
alert('Число в гигабайтах: ' + gigabyte)

