
/*  8. В переменной month хранится текущий месяц (new Date()). 
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).*/

let date = new Date(),
    month = date.getMonth() + 1;

if (month > 2 && month < 6) {
    result = "Весна"
} else if (month > 5 && month < 9) {
    result = "Лето"
} else if (month > 8 && month < 12) {
    result = "Осень"
} else {
    result = "Зима"
}
alert(result)

/*
switch (month) {
    case 1:
    case 2:
    case 12: result = 'Зима'; break;
    case 3:
    case 4:
    case 5: result = 'Весна'; break;
    case 6:
    case 7:
    case 8: result = 'Лето'; break;
    case 9:
    case 10:
    case 11: result = 'Осень'; break;
    default: result = 'Такого месяца нет';

} */

