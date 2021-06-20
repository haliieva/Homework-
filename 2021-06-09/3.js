/* 3. История в картинках. Создайте массив тематически связанных строковых картинок. 
Перебирая массив в цикле с определенной задержкой (setTimeout) выводите на страницу один из элементов массива (одну из картинок). 
Тема - свободная, ограничена только набором доступных строковых картинок. */

 const storyArr = [
    '😠',
    '😡',
    '😤',
    '🍕',
    '🥰',
    '😇'
  ];

let elem = document.createElement('h1');
document.body.appendChild(elem);

for(let i = 0; i < storyArr.length; i++) {
  setTimeout(() => elem.innerHTML = storyArr[i], i * 1000)
}


/* 2 способ: */

/* let elem = document.createElement('h1'),
    count = 0;
 
document.body.appendChild(elem);
let createStory = num => {
  elem.innerHTML = storyArr[num];
  setTimeout(() => createStory(count++), 1000);
  if(count == storyArr.length) count = 0;
}
createStory(count);  */