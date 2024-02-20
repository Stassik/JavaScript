'use strict';

/**
 * Задача 2.
 
Бесконечная лента фотографий
Для создания бесконечной ленты с фотографиями с использованием 
Unsplash API, выполните следующие шаги:
1. Зарегистрируйтесь на Unsplash:
○ Перейдите на веб-сайт Unsplash (https://unsplash.com/).
○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
○ Войдите в свой аккаунт Unsplash.
 
2. Создайте приложение:
○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash
(https://unsplash.com/developers).
○ Нажмите на кнопку "Your apps".
○ Нажмите "New Application" (Новое приложение).
○ Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете
использовать http://localhost для тестового сайта).
○ После заполнения информации, нажмите "Create Application" (Создать приложение).
 
3. Получите API-ключ:
○ После создания приложения, вы получите API-ключ. Этот ключ будет
отображаться в вашей панели управления приложением.
○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY.
Скопируйте его.
4. Измените код HTML и JavaScript:
○ Откройте вашу HTML-страницу в текстовом редакторе или
интегрированной среде разработки.
○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный
API-ключ.
 
5. Реализуйте загрузку фотографий при открытии страницы.
 
6. Реализуйте бесконечную подгрузку фотографий при прокручивании страницы.
 */
let isFetching = false
let count = 1;
let url = getUrl(count);

const contrainerEl = document.getElementById('photo-container');
render(url);

window.addEventListener('scroll', () => {
    if (isFetching) {
        return;
    }

    if (document.documentElement.scrollHeight === document.documentElement.scrollTop + document.documentElement.clientHeight) {
        count++;
        url = getUrl(count);
        render(url);
        console.log(count);
    }

});

function getUrl(count) {
    return `https://api.unsplash.com/photos/?client_id=pnsexap7AbLmC-qAcoA9hI-b-VzKcxNaNg5wn4X0jOo&page=${count}`;
}

async function render(url) {
    const data = await getData(url);
    createPhotoList(data);
    isFetching = false;
}

async function getData(url) {
    isFetching = true;
    let promise = await fetch(url);
    const data = await promise.json();
    return data;
}



function createPhotoList(data) {

    data.forEach(element => {
        console.log(element);
        contrainerEl.insertAdjacentHTML('beforeend', `<div class="photo"><img src="${element.urls.small_s3}" alt=""><p class="photo__author">${element.user.username}</p><svg class="btn " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>`);
        const btnEl = document.querySelector('.btn');
        if (data.liked_by_user) {
            btnEl.classList.add(added);
        }
    });

    const photoList = document.querySelectorAll('.photo');
    addBtnEvent(photoList);

}



function addBtnEvent(photoList) {
    photoList.forEach(photo => {
        const btn = photo.querySelector('.btn');
        btn.addEventListener('click', (e) => {
            if (!e.target.matches('.added')) {
                e.target.classList.add('added');
            } else {
                e.target.classList.remove('added');
            }

        });
    });
}



