/* 6. В переменную day записан текущий день недели. 
Если это не суббота и не воскресенье, выведите в alert сентенцию о необходимости идти на работу. */

let date = new Date(),
    day = date.getDay();

    if (day != (7 || 6)) {
        alert('Идите на работу')
    } else {
        alert('Спите дальше')
    }
