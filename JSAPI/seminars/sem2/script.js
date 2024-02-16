/**
 * Вам необходимо создать навигационное меню для веб-сайта, в
котором меняется активный пункт при клике без фактического
перехода на другие страницы. Меню должно обладать следующими
характеристиками:
1. Подсветка активного пункта: При клике на пункт меню он
должен становиться активным, и для активного пункта должен
применяться определенный стиль (например, изменение цвета
фона). Если выбрать другой пункт, предыдущий должен
перестать быть активным.
2. Эффекты наведения: При наведении курсора на пункты меню
должны применяться эффекты (например, изменение цвета
текста или фона) для подсказки пользователю, что пункт меню
является интерактивным
 */

const menuEl = document.querySelector('.menu');

menuEl.addEventListener('click', ({ target }) => {
    [...menuEl.children].forEach(child => {
        const linkChild = child.querySelector('.menu__link');
        if (linkChild.matches('.active') && linkChild != target) {
            linkChild.classList.remove('active');
        }
    })
    target.classList.add('active');
});


/**
 * Создайте простое модальное окно, которое появляется при клике на кнопку "Открыть
модальное окно" и закрывается при клике на кнопку "Закрыть". Модальное окно
должно содержать заголовок "Модальное окно" и кнопку для закрытия.
* Модальное окно должно плавно появляться и исчезать при открытии и закрытии.
 */

// const btnModalEl = document.querySelector('#modal');
// const modalEl = document.querySelector('.overlay');
// const popUpEl = modalEl.querySelector('.popUp');

// const btnCloseEl = popUpEl.querySelector('.popUp__btn');


// btnModalEl.addEventListener('click', () => {
//     modalEl.style.display = "flex";
//     modalEl.style.opacity = '1';
//     modalEl.style.visibility = "visible";
// });

// btnCloseEl.addEventListener('click', () => {
//     modalEl.style.opacity = '1';
//     modalEl.style.display = "none";
//     modalEl.style.visibility = "hidden";

// });

/**
 * Задание 3.
 
У вас есть кнопка "Купить". Создайте скрипт, который при клике 
на эту кнопку меняет её текст на "Товар добавлен в корзину" в 
течение 2 секунд, а затем возвращает исходный текст "Купить". 
В обработчике события клика также проверьте, является ли 
событие доверенным (event.isTrusted). Если событие является
доверенным, выполните изменение текста кнопки и убедитесь, 
что после 2 секунд текст возвращается в исходное состояние.
 */

const btnBuy = document.querySelector('.btn__buy');

btnBuy.addEventListener('click', (event) => {
    if (event.isTrusted) {
        btnBuy.textContent = "Товар добавлен в корзину";
        setTimeout(() => {
            btnBuy.textContent = "Купить";
        }, 2000)
    }

});

/**
 * Задание 4 (тайминг 20 минут)
Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям
отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность
для этого опросника, используя HTML, CSS и JavaScript.
1. Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен
иметь несколько вариантов ответов.
2. Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
3. Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
4. При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все
вопросы, и отобразить выбранные им варианты ответов.
5. Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить
на все вопросы перед завершением опроса.
6. По желанию можно добавить стилизацию опросника с использованием CSS для лучшего
пользовательского опыта.
 */

const btnSubmit = document.querySelector('#submit');
const questionsList = document.querySelectorAll('.question');
const resultArray = [];

btnSubmit.addEventListener('click', () => {
    questionsList.forEach(item => {
        const valueInput = item.querySelector('input:checked')?.value;
        resultArray.push(valueInput);
        if (valueInput === undefined) {
            item.classList.add('error');
        }

        resultArray.forEach(answer => {
            const name = answer.getAttribute(name);
            console.log(name);

        });
    });
});
