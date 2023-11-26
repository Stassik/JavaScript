/**
 * <div class="block"></div>
Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
Цвет текста синий
Рамка сплошная черная
Цвет фона #f8f8f8
Внутренний отступ 16px
Добавить данному блоку класс item_1 (использовать setAttribute)

 */

const block = document.querySelector('.block');
let itemBlock = document.createElement('div');
itemBlock.setAttribute('class', 'item');
itemBlock.innerHTML = 'Элемент внутри';

block.appendChild(itemBlock);
itemBlock.classList.add('item_1');



/**
 * Дан код
<div class="elem">
  <img src="photo.png" alt="photo">
  <div class="content">
    <h2 class="heading">Lorem, ipsum dolor.</h2>
    <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
  </div>
</div>

Необходимо с помощью querySelector найти параграф с классом text
Вывести в консоль соседний элемент h2
Вывести в консоль родительский элемент content
Вывести в консоль картинку
Вывести в консоль родительский элемент elem
*/

const elem = document.querySelector('p[class="text"]');
console.log(elem.previousElementSibling);
console.log(elem.parentElement);
console.log(elem.parentElement.previousElementSibling);

let elem_1 = elem;
while (elem_1.parentElement) {
    if (elem_1.parentElement.tagName !== 'BODY') {
        elem_1 = elem_1.parentElement;
    } else {
        break;
    }
}
console.log(elem_1);


/**
 * <div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

*/

const title = document.querySelector('div.elem_2 div.info h2.subtitle');
let par = title;

while (par.parentElement) {
    if (par.parentElement.tagName !== 'BODY') {
        par = par.parentElement;
        console.log(par);
    } else {
        break;
    }
}


/**
 * <form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
Цвет у рамки сделать красным

 * 
 */

const button = document.querySelector('form > button.btn');
const input = document.querySelector('form input');

let resetButton = document.createElement('button');
resetButton.innerHTML = "Удалить запись";
button.parentElement.appendChild(resetButton);

let counter = 0;
button.addEventListener('click', () => {
    if(!input.value) {
        counter++;
        const h2 = document.createElement('h2');
        h2.innerHTML = 'Вы не заполнили поле ввода ' + counter;
        button.parentElement.appendChild(h2);
        input.style.outline = '1px solid red';
    }
});

resetButton.addEventListener('click', () => {
    let titleDel = document.querySelectorAll('form h2');
    if( titleDel.length > 0) {
        titleDel[titleDel.length - 1].remove();
        counter--;
    }
    
});


/**
 * Дан тег <div class="content"></div> 
Создайте с помощью javascript новый элемент button
Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

 */

const content_1 = document.querySelector('.content');
const btn = document.createElement('button');
btn.innerHTML = "Отправить";
content_1.appendChild(btn);
btn.addEventListener('click', () => {
    btn.innerHTML = 'Текст отправлен';
});
