/**
 * Задание 1 (тайминг 30 минут)
    Работа с BOM
        1. Определение текущего размера окна браузера:
        ○ Напишите функцию, которая будет выводить текущую
        ширину и высоту окна браузера при его изменении.

        2. Подтверждение закрытия страницы:
        ○ Создайте всплывающее окно или диалоговое окно,
        которое появляется при попытке закрыть вкладку
        браузера и спрашивает пользователя, уверен ли он в
        своем решении закрыть страницу.

        3. Управление историей переходов:
        ○ Используйте объект history для управления историей
        переходов на веб-странице. Создайте кнопки "Назад" и
        "Вперед" для перемещения по истории.
 */
// const width = document.querySelector('.width');
// const height = document.querySelector('.height');

// getScreenSize(window);

// window.addEventListener('resize', (event) => {
//     getScreenSize(event.target);
// });

// function getScreenSize(event) {
//     const windowWidth = event.innerWidth;
//     const windowHeight = event.innerHeight;
//     width.textContent = `Ширина: ${windowWidth}`;
//     height.textContent = `Высота: ${windowHeight}`;
// }


/*
Задание 2 (тайминг 30 минут)
Вы должны создать веб-страницу, которая позволяет пользователю динамически
управлять элементами на странице. Ниже приведены основные требования и
функциональность:
1. На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и
"Клонировать элемент".
2. При нажатии на кнопку "Добавить элемент" на страницу добавляется новый
квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент
должен иметь класс .box и содержать текст, указывающий порядковый номер
элемента (1, 2, 3 и так далее).
3. При нажатии на кнопку "Удалить элемент" удаляется последний добавленный
элемент, если таковой имеется.
4. При нажатии на кнопку "Клонировать элемент" создается копия последнего
добавленного элемента и добавляется на страницу.
5. Все элементы имеют класс .box и стилизованы с помощью CSS (см. пример).
6. Элементы могут быть добавлены, удалены и клонированы в любом порядке и в
любом количестве.
*/

// const addBtnEl = document.querySelector('#addButton');
// const removeBtnEl = document.querySelector('#removeButton');
// const cloneBtnEl = document.querySelector('#cloneButton');

// const containerEl = document.querySelector('#container');


// addBtnEl.addEventListener('click', () => {
//     const boxElList = containerEl.children;
//     let newBoxEl = document.createElement('div');
//     newBoxEl.className = 'box';
//     newBoxEl.textContent = boxElList.length + 1;
//     containerEl.appendChild(newBoxEl);
// });

// removeBtnEl.addEventListener('click', () => {
//     containerEl.lastElementChild?.remove();
// });

// cloneBtnEl.addEventListener('click', () => {
//     if (containerEl.childElementCount != 0) {
//         const cloneEl = containerEl.lastElementChild?.cloneNode(true);
//         console.log(cloneEl);
//         containerEl.appendChild(cloneEl);
//     } else {
//         console.log("Клонировать нечего");
//     }
// });
/**
 * 
 * Задание 3.
Необходимо создать страницу со списком статей.
Каждая статья состоит из id, заголовка, текста статьи.
id - будем брать из unix timestamp.
Необходимо подготовить список статей в JSON-формате,
которые будут выводиться на странице при первом ее 
открытии.
Необходимо реализовать возможность удаления статьи.
Необходимо реализовать возможность добавления статьи.
Необходимо реализовать возможность изменения статьи,
ввод данных можно реализовать через prompt.
Статьи должны сохраняться в локальное хранилище 
браузера, и должны быть доступны после перезагрузки 
страницы.
 * 
 */




const localStorageKey = 'articles';
const initialArticles = '[{"id":1707770484421,"title":"header","text":"super puper text"},{"id":1707770474921,"title":"header2","text":"super puper text222222"},{"id":1707770481231,"title":"header3","text":"super puper text333333"}]';
const articlesListEl = document.querySelector('.articles__list');
const addBtnEl = document.querySelector('.btn_add');

if (!localStorage.getItem(localStorageKey)) {

    localStorage.setItem(localStorageKey, initialArticles);
}


const data = JSON.parse(localStorage.getItem(localStorageKey));
addArticles(data);



articlesListEl.addEventListener('click', ({ target }) => {
    if (target.matches('.btn_del')) {
        const element = target.closest('.article');
        deleteArticle(element);

        const indexEl = data.findIndex(item => {
            return item.id === +element.dataset.id;
        })

        data.splice(indexEl, 1);
        addedArticlesToLocalStorage(data);


    } else if (target.matches('.btn_edit')) {
        const element = target.closest('.article');
        let titleEl = element.querySelector('.article__title');
        let textEl = element.querySelector('.article__text');
        const newTitle = prompt('Новый заголовок', titleEl.textContent);
        const newText = prompt("Новый текст", textEl.textContent);
        titleEl.textContent = newTitle;
        textEl.textContent = newText;

        const editArticle = data.find(item => {
            return item.id === +element.dataset.id;
        })

        editArticle.title = newTitle;
        editArticle.text = newText;

        addedArticlesToLocalStorage(data);
    }
});


addBtnEl.addEventListener('click', () => {
    const title = prompt('Заголовок');
    const text = prompt('Текст');
    const newObj = { id: Date.now(), title, text };

    addedArticleElement(newObj);
    data.push(newObj);

    addedArticlesToLocalStorage(data);
})


function deleteArticle(element) {
    element.remove();
}


function addArticles(data) {
    try {
        if (!data) {
            throw new Error('В базе пусто');
        }
        data.forEach(article => {
            addedArticleElement(article);
        });

    } catch (error) {
        const errorEl = document.createElement('div');
        errorEl.textContent = error.message;
        articlesListEl.prepend(errorEl);
    }
}

function addedArticleElement(article) {
    articlesListEl.insertAdjacentHTML("beforeend", `
        <div class="article" data-id="${article.id}">
            <h3 class="article__title">${article.title}</h3>
            <p class="article__text">${article.text}</p>
            <button class="btn_del">Удалить</button>
            <button class="btn_edit">Изменить</button>
        </div>
    
    `)
}

function addedArticlesToLocalStorage(articles) {

    localStorage.setItem(localStorageKey, JSON.stringify(articles));

}