/**
 * В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
Добавить кнопку отправить
При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”
 * 
 */
// let checkbox = document.createElement('input');
// checkbox.type = 'checkbox';
// let spanEl = document.createElement('span');
// spanEl.innerHTML = 'Согласен с условиями';

let btnEl = document.createElement('button');
btnEl.type = 'submit';
btnEl.innerHTML = 'Отправить';

let formEl = document.createElement('form');
const container = document.querySelector('.container');
container.appendChild(formEl);
// formEl.appendChild(checkbox);
// formEl.appendChild(spanEl);
formEl.appendChild(btnEl);

// btnEl.addEventListener('click', (e) => {
//     if (!checkbox.checked) {
//         let spanEl2 = document.createElement('span');
//         spanEl2.innerHTML = 'Необходимо согласиться с условиями';
//         formEl.appendChild(spanEl2);
//     }
// });

/**
 * В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
Кнопка отправить
Если выбран чай, необходимо вывести сообщение “Чай закончился”
Если выбран кофе, необходимо вывести соообщение “кофе закончился”

 */

// let radio1 = document.createElement('input');
// radio1.type = 'radio';
// radio1.name = 'drink';
// let radio2 = document.createElement('input');
// radio2.type = 'radio';
// radio2.name = 'drink';
// let spanEl1 = document.createElement('span');
// spanEl1.innerHTML = 'Чай';
// let spanEl2 = document.createElement('span');
// spanEl2.innerHTML = 'Кофе';
// formEl.appendChild(radio1);
// formEl.appendChild(spanEl1);
// formEl.appendChild(radio2);
// formEl.appendChild(spanEl2);

// btnEl.addEventListener('click', function(e) {
//     if(radio1.checked) {
//         alert('Чай закончился');
//     } else {
//         alert('Кофе закончился');
//     }
// });


/**
 * Создать поле ввода (пароль)
Кнопка отправить
Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

 */

let pasEl = document.createElement('input');
pasEl.type = 'password';
formEl.appendChild(pasEl);

pasEl.addEventListener('focus', function(e){
    pasEl.style.outline = '1px solid lightgreen';
});

btnEl.addEventListener('click', function(e) {
    if(pasEl.value != 'бум') {
        pasEl.style.outlineColor = 'red';
        let spanEl = document.createElement('span');
        spanEl.innerHTML = 'пароль неверный';
        formEl.appendChild(spanEl);
    }
});

/**
 * Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

 */
let input = document.createElement('input');
input.type = 'text';
let heading = document.createElement('h1');

formEl.appendChild(input);
formEl.appendChild(heading);

input.addEventListener('input', function(e){
    heading.innerHTML = e.target.value;
});




