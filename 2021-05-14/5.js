'use strict';

let distance = 384400,
    flightSpeed = +prompt('Enter the flight speed in km/hour', '39000'),
    flightTime = (distance / flightSpeed).toFixed(3);

alert('The time it takes for the spacecraft to reach the moon: ' + flightTime)





