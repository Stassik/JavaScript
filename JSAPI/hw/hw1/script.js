

/*
 * Необходимо создать веб-страницу с динамическими элементами с расписанием занятий.

На странице должна быть таблица с расписанием занятий, на основе JSON-данных.
Каждая строка таблицы должна содержать информацию о занятии, а именно:
- название занятия
- время проведения занятия
- максимальное количество участников
- текущее количество участников
- кнопка "записаться"
- кнопка "отменить запись"

Если максимальное количество участников достигнуто, либо пользователь уже записан на занятие, сделайте кнопку "записаться" неактивной.
Кнопка "отменить запись" активна в случае, если пользователь записан на занятие, иначе она должна быть неактивна.

Пользователь может записаться на один курс только один раз.

При нажатии на кнопку "записаться" увеличьте количество записанных участников.
Если пользователь нажимает "отменить запись", уменьшите количество записанных участников.
Обновляйте состояние кнопок и количество участников в реальном времени.

Если количество участников уже максимально, то пользователь не может записаться, даже если он не записывался ранее.

Сохраняйте данные в LocalStorage, чтобы они сохранялись и отображались при перезагрузке страницы.
 */


// localStorage.clear();
const localStorageKey = 'lessons';
const initialLessons = '[{"id":1,"name":"Йога","time":"10:00 - 11:00","maxParticipants":15,"currentParticipants":8},{"id":2,"name":"Пилатес","time":"11:30 - 12:30","maxParticipants":10,"currentParticipants":5},{"id":3,"name":"Кроссфит","time":"13:00 - 14:00","maxParticipants":20,"currentParticipants":20},{"id":4,"name":"Танцы","time":"14:30 - 15:30","maxParticipants":12,"currentParticipants":10},{"id":5,"name":"Бокс","time":"16:00 - 17:00","maxParticipants":8,"currentParticipants":7}]';
const tableBodyEl = document.querySelector('tbody');


//Добавление списка занятий в Хранилище при первом открытии страницы
if (!localStorage.getItem(localStorageKey)) {
    localStorage.setItem(localStorageKey, initialLessons);
}

const lessonsDB = JSON.parse(localStorage.getItem(localStorageKey));

addLessonsToTable(lessonsDB);



tableBodyEl.addEventListener('click', ({ target }) => {
    const indexEl = findIndexElement(target);
    const lesson = lessonsDB[indexEl];
    const parentEl = target.closest('.lessons__item');
    let countEl = parentEl.querySelector('.count');
    if (target.matches('.btn_del')) {
        const regBtn = parentEl.querySelector('.btn_reg');
        const newCount = lesson.currentParticipants - 1
        lesson.currentParticipants = newCount;
        countEl.textContent = newCount;
        
        delete lesson.state;
        target.disabled = true;
        regBtn.disabled = false;
        lessonsDB[indexEl] = lesson;
        editInnerLocalStorage(lessonsDB);

    } else if (target.matches('.btn_reg')) {
        const delBtn = parentEl.querySelector('.btn_del');
        const newCount = lesson.currentParticipants + 1
        lesson.currentParticipants = newCount;
        countEl.textContent = newCount;

        lesson.state = 'true';
        target.disabled = true;
        delBtn.disabled = false;
        lessonsDB[indexEl] = lesson;
        editInnerLocalStorage(lessonsDB);
    }
});


function findIndexElement(target) {
    const element = target.closest('.lessons__item');
    return lessonsDB.findIndex(item => {
        return item.id === +element.dataset.id;
    })
}





//Функция добавления контента на страницу

function addLessonsToTable(data) {
    try {
        if (!data) {
            throw new Error('На данный момент нет доступных занятий');
        }
        data.forEach(item => {
            addedLessonsElement(item);
        });

    } catch (error) {
        const errorEl = document.querySelector('.error');
        errorEl.textContent = error.message;
    }
}


//Функция генерации контента занятия

function addedLessonsElement(lesson) {
    let delBtnState = checkedDelButtonState(lesson);
    let regBtnState = checkedRegButtonState(lesson);
    tableBodyEl.insertAdjacentHTML("beforeend", `
        <tr class="lessons__item"  data-id="${lesson.id}">
            <td>${lesson.name}</td>
            <td>${lesson.time}</td>
            <td class="max">${lesson.maxParticipants}</td>
            <td class="count">${lesson.currentParticipants}</td>
            <td>
                <button class="btn_del" ${delBtnState}>Отменить</button>
                <button class="btn_reg" ${regBtnState}>Записаться</button>
            </td>
        </tr>
    `)
}


// Функции установки состояния кнопок 
function checkedDelButtonState(lesson) {
    if (lesson.state === undefined) {
        return delBtnState = 'disabled=""';
    } else {
        return delBtnState = '';
    }
}

function checkedRegButtonState(lesson) {
    if (lesson.state !== undefined || lesson.maxParticipants === lesson.currentParticipants) {
        return regBtnState = 'disabled=""';
    } else {
        return regBtnState = '';
    }
}



//Функция обновления содержания Хранилища
function editInnerLocalStorage(array) {
    localStorage.setItem(localStorageKey, JSON.stringify(array));
}
