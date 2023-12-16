/**
 * В html создать кнопку button
После загрузки страницы вывести в консоль текст “страница загрузилась”
Добавить событие onclick которое выводит в консоль текст “событие onclick”
Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

 */
window.onload = function () {
    console.log("Страница загрузилась");
};

const button = document.querySelector('.btn');
button.addEventListener('click', function () {
    console.log('событие addEventListener');
});


/**
 * Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

 */


let btn1 = document.querySelector('.btn_1');
let btn2 = document.querySelector('.btn_2');
let btn3 = document.querySelector('.btn_3');
let btn4 = document.querySelector('.btn_4');
let btn5 = document.querySelector('.btn_5');

let func = function (e) {
    console.log(e.target);
};

btn1.addEventListener('click', func);
btn2.addEventListener('click', func);
btn3.addEventListener('click', func);
let counter = 0;
btn4.addEventListener('click', function () {
    counter++;
    console.log(counter);
});

btn5.addEventListener('click', function () {
    btn5.textContent = "Вы нажали на эту кнопку";
});

/**
 * Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
Создать вторую кнопку, которая будет удалять созданный заголовок h1
Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

 */

let addHeadingBtn = document.querySelector('.btn-heading');
let delHeadingBtn = document.querySelector('.btn-heading_del');
let mouseBtn = document.querySelector('.btn-mouse');


addHeadingBtn.addEventListener('click', function(){
    let heading = document.createElement('h1');
    heading.innerHTML = "Новый заголовок";
    addHeadingBtn.parentElement.appendChild(heading);
});

delHeadingBtn.addEventListener('click', function(){
    const headingList = document.querySelectorAll('h1');
    if(headingList.length > 0) {
        headingList[headingList.length - 1].remove();
    } 
    
});

mouseBtn.addEventListener('mouseover', function(){
    console.log('вы навели на данную кнопку');
});
mouseBtn.addEventListener('mouseout', function(){
    console.log('Наведения на кнопку больше нет');
});

/**
 * Создать в html список состоящий из 3-х произвольных элементов li
Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
Создать кнопку, которая будет удалять первый элемент из созданного списка
Создать кнопку, при клике на которую ей добавляется класс “click”

 */
const buttonAddItem = document.createElement('button');
const list = document.querySelector(".list");
buttonAddItem.className = "btnAddItem";
buttonAddItem.innerHTML = "Добавить элемент списка";
list.parentElement.appendChild(buttonAddItem);

buttonAddItem.addEventListener('click', function(){
    list.appendChild
});
