/**
 * Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице.

Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
a. Контейнер для отображения текущего изображения.
b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

Для создания элементов интерфейса используйте HTML.
При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.
 */

const imagesItemNodeList = document.querySelectorAll('.gallery__item');
const imagesItemArray = Array.from(imagesItemNodeList);
const btnBoxEl = document.querySelector('.button__box');

const paginationItemList = document.querySelectorAll('.pagination__item');
const paginationArray = Array.from(paginationItemList);
console.log(paginationArray);




btnBoxEl.addEventListener('click', ({ target }) => {
    let indexCurrentImage = 0;
    indexCurrentImage = findImageIndex(indexCurrentImage);

    deleteClassVisible(indexCurrentImage);

    if (target.dataset.direction === 'prev') {
        if (indexCurrentImage === 0) {
            addClassVisible(imagesItemArray.length - 1);
        }
        else {
            addClassVisible(indexCurrentImage - 1);
        }

    } else {
        if (indexCurrentImage === imagesItemArray.length - 1) {
            addClassVisible(0);
        }
        else {
            addClassVisible(indexCurrentImage + 1);
        }
    }
});

paginationItemList.forEach(paginationItem => {
    paginationItem.addEventListener('click', () => {
        // console.log(target);
        let indexCurrentImage = 0;
        indexCurrentImage = findImageIndex(indexCurrentImage);

        deleteClassVisible(indexCurrentImage);
        let imageNewCurrent = paginationArray.indexOf(paginationItem);

        addClassVisible(imageNewCurrent);
    });
});


// Находим индекс текущего изображения
function findImageIndex(indexCurrentImage) {
    imagesItemArray.forEach(image => {
        if (image.matches('.visible')) {
            indexCurrentImage = imagesItemArray.indexOf(image);

        }
    });
    return indexCurrentImage;
}

// Добавляем класс к новому
function addClassVisible(index) {
    imagesItemArray[index].classList.add('visible');
    paginationArray[index].classList.add('checked');
}


//Удаляем класс с текущего
function deleteClassVisible(index) {
    imagesItemArray[index].classList.remove('visible');
    paginationArray[index].classList.remove('checked');
}
