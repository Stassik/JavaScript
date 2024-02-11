/*
Задание 1 (тайминг 30 минут)
Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве
(имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен
имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой
задержки — отображать новости на странице.
1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать
задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для
добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное
выполнение и ошибки с использованием then() и catch().
4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует
её снова после завершения операции (будь то успешная загрузка или ошибка).
*/

const mockDatabase = [
    { title: "Новость 1", content: "Содержимое новости 1..." },
    { title: "Новость 2", content: "Содержимое новости 2..." },
];

const newsBox = document.querySelector(".news__container");
const btnEl = document.querySelector(".news__btn");

function fetchNews() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.4) {
                reject("Ошибка загрузки новостей");
            } else {
                resolve(mockDatabase);
            }
        }, 2000);
    });

}

btnEl.addEventListener("click", () => {
    btnEl.disabled = true;
    fetchNews()
        .then((data) => {
            data.forEach(item => {
                generateNewsItem(item)
            });
        })
        .catch((error) => {

            newsBox.textContent = error;
        })
        .finally(() => {
            btnEl.disabled = false;
        });

});


function generateNewsItem(item) {
    const newsItem = document.createElement('li');
    const title = document.createElement('h3');
    title.textContent = item.title;
    const text = document.createElement('p');
    text.textContent = item.content;
    newsItem.appendChild(title);
    newsItem.appendChild(text);
    newsBox.appendChild(newsItem);
}
