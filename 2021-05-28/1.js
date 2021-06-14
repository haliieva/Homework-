'use strict';

/*  1 . Создайте структуру данных, полностью описывающую html-разметку картинки.
 С помощью методов браузера добавьте ее на страницу со всеми атрибутами, 
 читая значения свойств из созданного объекта.*/
 
const picture = {
	src: "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif",
	alt: "",
	style: "border: 1px solid #ccc",
	width: "200"
  };
   
  const img = document.createElement('img');
  for(let key in picture) img[key] = picture[key];
  document.body.appendChild(img);