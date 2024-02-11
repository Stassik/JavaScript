/**
 * Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в
    систему, используя данные, сохраненные в LocalStorage.
    Приложение будет состоять из трёх основных страниц:
1. Страница регистрации:
    ○ Предлагает пользователю ввести логин и пароль.
    ○ После ввода данных, они сохраняются в LocalStorage.
    ○ Пользователь перенаправляется на страницу входа.
2. Страница входа:
    ○ Предлагает пользователю ввести логин и пароль.
    ○ Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется
    на страницу приветствия.
    ○ Если данные не совпадают, выводится сообщение об ошибке.
3. Страница приветствия:
    ○ Простое приветственное сообщение для авторизованного пользователя.
    ○ Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа.
 * 
 */


const buttonElReg = document.querySelector('.reg__btn');
const buttonElAuth = document.querySelector('.auth__btn');
const buttonElExit = document.querySelector('.exit__btn');

const loginInput = document.querySelector('input[type="text"]');
const passInput = document.querySelector('input[type="password"]');

const errorEl = document.querySelector('.error-message');

if (buttonElReg) {
    buttonElReg.addEventListener('click', () => {
        if (localStorage.length != 0) {
            for (const key in localStorage) {
                try {
                    if (key === loginInput.value) {
                        throw new Error('Такой пользователь уже существует!');
                    }
                    localStorage.setItem(loginInput.value, passInput.value);
                } catch (error) {
                    errorEl.textContent = error.message;
                }
            }
        }
        localStorage.setItem(loginInput.value, passInput.value);
        window.location.replace('./authorization.html');
    });
}

if (buttonElAuth) {
    buttonElAuth.addEventListener('click', () => {
        try {
            if (localStorage.length === 0) {
                throw new Error('Нет зарегистрированных пользователей!');
            }
            let res = false;
            for (const key in localStorage) {
                if (key === loginInput.value) {
                    res = true;
                    if (localStorage[key] !== passInput.value) {
                        throw new Error('Неверный пароль!');
                    }
                    window.location.replace('./greeting.html');
                }
            }
            if (res === false) {
                throw new Error('Такого пользователя не существует!');
            }

        } catch (error) {
            errorEl.textContent = error.message;
        }
    });
}

if (buttonElExit) {
    buttonElExit.addEventListener('click', () => {
        window.location.replace('./index3.html');
    });
}
