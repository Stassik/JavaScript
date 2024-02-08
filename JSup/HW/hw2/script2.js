/**
 * Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
 */

const buttonEl = document.querySelector('.form__btn');
const inputEl = document.querySelector('.form__input');
const boxEl = document.querySelector('.feedback__box');
const messageEl = document.querySelector('.message');

function validation() {
    try {
        if (inputEl.value.length < 50 || inputEl.value.length > 500) {
            throw new Error("Недопустимое количество символов");
        }
        const feedbackEl = document.createElement('li');
        feedbackEl.classList.add('feedback__item');
        feedbackEl.textContent = inputEl.value;
        boxEl.appendChild(feedbackEl);

    }
    catch (error) {
        messageEl.textContent = error.message;
    }
}

buttonEl.addEventListener('click', validation);
