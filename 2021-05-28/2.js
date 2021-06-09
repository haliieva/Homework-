'use strict';

/* 2. Создайте объект dates для хранения дат. Первая дата – позавчера. 
Вторая дата – текущая дата (new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. 
Проверьте, попадает ли введенная дата в диапазон дат объекта dates. */


let dateToCheck = prompt('Введите дату yyyy-MM-dd: ')

const dates = {
firstDate: new Date(new Date().setDate(new Date().getDate()-2)),
secondDate: new Date(new Date().setDate(new Date().getDate()-365))
}

if (+new Date(dateToCheck) <= +new Date(dates.firstDate) && +new Date(dateToCheck) >= +new Date(dates.secondDate)) {
    alert('Введенная дата попадает в диапазон');
} else {
    alert('Дата не попала в диапазон');
}