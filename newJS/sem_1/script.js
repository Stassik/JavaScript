/*Task 1 
Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
Получите ссылку на первый абзац с классом www. и вывести его в консоль
*/
const blockElement = document.querySelector('#block p:first-child');
console.log(blockElement);

const firstElement = document.getElementsByClassName('www');
console.log(firstElement[0].innerHTML);



/*
Task 2

Дан тег <a class="link" href="#">link text html</a>
Вам необходимо поменять текст внутри ссылки на “link text js”
Заменить href, на значение https://developer.mozilla.org/ru/ 

Дан тег <img class="photo" src="" alt=""> 
Вам необходимо с помощью js поменять значение src на любое изображение из интернета

*/

const link = document.getElementsByClassName('link');
link[0].innerHTML = 'link text js';
link[0].href = 'https://developer.mozilla.org/ru/';

const photo = document.getElementsByTagName("img");
console.log(photo);
photo[0].src = "https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg";


/*
Task 3
Дан тег <div class="content"></div> 
Создайте новый элемент p
Добавьте в него текст “Новый текстовый элемент”
Добавьте созданный элемент внутри <div class="content"></div>
Удалите добавленный узел 
*/
const newElement = document.createElement('p');
newElement.innerHTML = 'Новый текстовый элемент';
const content = document.getElementsByClassName('content');
content[0].appendChild(newElement);
newElement.remove();

/*
Task 4

Дан тег <div class="content"></div> 
Создайте с помощью javascript новый элемент button
Добавьте текст для кнопки “Отправить”
При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

*/

const button = document.createElement('button');
button.innerHTML = 'Отправить';
content[0].appendChild(button);
button.onclick = function(){
    button.innerHTML = 'Текст отправлен';
};

const array = ['list_1', 'list_2', 'list_3'];
const list = document.createElement('ul');
array.forEach(element => {
    let item = document.createElement('li');
    item.innerHTML = element;
    list.appendChild(item);
});

console.log(list);



