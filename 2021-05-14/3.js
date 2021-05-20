'use strict';

let firstName = prompt('Enter your FirstName', 'John').toUpperCase(),
    lastName = prompt('Enter your LastName', 'Doe').toUpperCase();

alert(`What’s up ${firstName + ' ' + lastName}`)