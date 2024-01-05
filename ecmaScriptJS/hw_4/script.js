/**
 * Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) 
 * и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.  
 */

const url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

try {
    const data = await getUsers(url);
    const bodyEl = document.querySelector('body');
    console.log(data);
    data.forEach(user => {
        bodyEl.insertAdjacentHTML('beforeend',
            `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${user.name} (${user.username})</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: ${user.email}</li>
                    <li class="list-group-item">Address: ${user.address.city} ${user.address.street} ${user.address.suite}</li>
                    <li class="list-group-item">Company: ${user.company.name}</li>
                </ul>
                <div class="card-body">
                    <a href="${user.website}" class="card-link">Web site</a>
                    <button type="button" class="btn btn-danger">Delete card</button>
                </div>
            </div>
        `)

    });
} catch (error) {
    console.log('ошибка');
}

const buttonsDelete = document.querySelectorAll('.btn-danger');
buttonsDelete.forEach(btn => {
    btn.addEventListener('click', function (e) {
        const clickBtn = e.target;
        const card = clickBtn.closest('.card');
        card.remove();
    });
})


/***
 * Необязательная задача
Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.
 */

const dogsUrl = 'https://dog.ceo/api/breeds/image/random';

setInterval(async function timeout() {
    async function getImages(dogsUrl) {
        const res = await fetch(dogsUrl);
        const data = await res.json();
        return data;
    }

    try {
        const data = await getImages(dogsUrl);
        const bodyEl = document.querySelector('body');
        console.log(data);
        bodyEl.insertAdjacentHTML('beforeend',
            `
            <div class="card" style="width: 18rem;">
                <img src="${data.message}" class="card-img-top" alt="...">
            </div>
        `)

    } catch (error) {
        console.log('ошибка');
    }
}, 3000);


