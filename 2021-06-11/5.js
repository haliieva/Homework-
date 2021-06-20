/* Есть следующий код: 
Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

// format.call(/* Ваш код */; // Ukraine
// format.apply(/* Ваш код */); // [Ukraine]
// format.call(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // undefined */

var country = {
  name: 'Ukraine',
  language: 'ukrainian',
  capital: {
      name: 'Kyiv',
      population: 2907817,
      area: 847.66
  }
};

function format(start, end) {
  console.log(start + this.name + end);
}

format.call(country, name, ''); // Ukraine
format.apply(country, ['[',']']); // [Ukraine]
format.call(country.capital, name, ''); // Kyiv
format.apply(country.capital, [name, '']); // Kyiv
/* or this way
format.call(country.capital,"","");
format.apply(country.capital,["",""]); */

format.apply(this,[""]); // undefined