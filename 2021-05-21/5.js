/* 5. Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. 
Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, 
в противном случае – ожидаете. */


let busNum = +prompt('Какая маршрутка приехала, 7, 225 или 255?','7');

if (busNum === 7 || busNum === 225 || busNum === 255) {
    alert('Вы едете домой')
} else {
    alert('Ожидайте')
}
