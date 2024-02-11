/**
 * Задание 3 (тайминг 35 минут)
Создать интерактивную веб-страницу, где пользователи могут выбирать различные элементы мебели
(например, столы, стулья, диваны) и их параметры (материал, цвет, стиль). Выбранные параметры должны
быть сохранены так, чтобы при повторном посещении сайта пользователь мог видеть свой ранее собранный
комплект мебели.
1. Пользователи могут выбирать из различных типов мебели (например, столы, стулья, диваны).
2. Для каждого типа мебели доступен выбор параметров (цвет, материал, стиль).
3. Предусмотреть кнопку "Сохранить комплект", при нажатии на которую текущий выбор пользователя
сохраняется в localStorage.
4. При повторном посещении сайта автоматически загружать сохраненные параметры из localStorage и
отображать ранее созданный комплект.
5. Предусмотреть возможность для пользователя очистить сохраненные настройки через специальную
кнопку.
6. После нажатия на кнопку "Сохранить" на странице должен отображаться выбранный комплект.
7. При нажатии на кнопку "Очистить" должно появляться сообщение о том, что выбор не сделан и
предыдущие настройки удалены.
*/

const saveBtn = document.querySelector('#save');
const clearBtn = document.querySelector('#clear');
const getBtn = document.querySelector('#get');
const resultEl = document.querySelector('#result');

const selectElements = document.querySelectorAll('select');


saveBtn.addEventListener('click', () => {
    selectElements.forEach(select => {
        // Cookies.set(select.id, select.value);
        document.cookie = select.id + "=" + select.value;
        resultEl.textContent = 'Данные сохранены';
    });

});

clearBtn.addEventListener('click', () => {
    selectElements.forEach(select => {
        try {
            if (!document.cookie) {
                throw new Error('Ошибка: Нет сохранений');
            }
            document.cookie = select.id + "=; max-age=-1";
            resultEl.textContent = 'Данные удалены';
        } catch (error) {
            resultEl.textContent = error.message;
        }
    });
});

getBtn.addEventListener('click', () => {
    try {
        if (!document.cookie) {
            throw new Error('Ошибка: Нет сохранений');
        }

        let cookies = document.cookie.split('; ');
        console.log(cookies);
        for (const cookie of cookies) {
            let [name, value] = cookie.split("=");
            selectElements.forEach(select => {
                if (select.id === name) {
                    select.value = value;
                }
            });
        }

        resultEl.textContent = 'Данные загружены';
    } catch (error) {
        resultEl.textContent = error.message;
    }
});