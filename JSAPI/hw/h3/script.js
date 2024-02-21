
const localStorageKey = 'photos';
const url = 'https://api.unsplash.com/photos/random?client_id=pnsexap7AbLmC-qAcoA9hI-b-VzKcxNaNg5wn4X0jOo';

const photoContainerEl = document.querySelector('#photo-container');
const btnNextEl = document.querySelector('.btn-next');
const btnPrevEl = document.querySelector('.btn-prev');

let dataPhotos = [];
let indexCurrentPhoto = 0;


if (!localStorage.getItem(localStorageKey)) {
    localStorage.setItem(localStorageKey, dataPhotos);
    btnPrevEl.setAttribute('disabled', '');
} else {
    dataPhotos = JSON.parse(localStorage.getItem(localStorageKey));
    indexCurrentPhoto = dataPhotos.length - 1;
}

render();


async function render() {
    const initialdata = await getData();
    if (dataPhotos.length === 0) {
        const newPhoto = {
            id: initialdata.id,
            photo: initialdata
        };
        dataPhotos.push(newPhoto);
        addedPhotoToContainer(newPhoto.photo);
        addPhotoToLocalStorage(dataPhotos);
        indexCurrentPhoto = dataPhotos.length - 1;
    } else {
        checkForPhotoInLocalStorage(initialdata);
    }

}


async function getData() {
    isFetching = true;
    let promise = await fetch(url);
    const data = await promise.json();
    return data;
}


function checkForPhotoInLocalStorage(initialdata) {
    // dataPhotos = JSON.parse(localStorage.getItem(localStorageKey));
    const result = false;
    dataPhotos.forEach(item => {
        if (item.id === initialdata.id) {
            addedPhotoToContainer(item.photo);
            result = true;
        };
    });
    if (result === false) {
        const newPhoto = {
            id: initialdata.id,
            photo: initialdata
        };
        addedPhotoToContainer(newPhoto.photo);
        dataPhotos.push(newPhoto);
        addPhotoToLocalStorage(dataPhotos);
        indexCurrentPhoto = dataPhotos.length - 1;
    }
}



function addedPhotoToContainer(data) {
    photoContainerEl.insertAdjacentHTML('beforeend', `<div class="photo"><img src="${data.urls.small_s3}" alt=""><p class="photo__author">${data.user.username}</p><svg class="btn btn-likes " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg><span class="likes">${data.likes}</span>`);
    const btnLikes = document.querySelector('.btn-likes');
    const likesEl = document.querySelector('.likes');
    if (data.liked_by_user) {
        btnLikes.classList.add('added');
    } else {
        btnLikes.classList.remove('added');
    }
    btnLikes.addEventListener('click', () => {
        addLikeToPhoto(data, btnLikes, likesEl);
    });
}

function addPhotoToLocalStorage(data) {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
}

btnPrevEl.addEventListener('click', () => {
    photoContainerEl.innerHTML = "";
    // dataPhotos = JSON.parse(localStorage.getItem(localStorageKey));
    if (dataPhotos.length > 0) {
        indexPrevPhoto = indexCurrentPhoto - 1;
        const prevPhoto = dataPhotos[indexPrevPhoto];
        addedPhotoToContainer(prevPhoto.photo);
        indexCurrentPhoto = indexPrevPhoto;
    }

    if (indexCurrentPhoto === 0) {
        btnPrevEl.setAttribute('disabled', '');
    }

});

btnNextEl.addEventListener('click', () => {
    btnPrevEl.removeAttribute('disabled');
    photoContainerEl.innerHTML = "";
    // const dataPhotos = JSON.parse(localStorage.getItem(localStorageKey));
    if (indexCurrentPhoto === dataPhotos.length - 1) {
        render();

    } else {
        const indexNextPhoto = indexCurrentPhoto + 1;
        addedPhotoToContainer(dataPhotos[indexNextPhoto].photo);
        indexCurrentPhoto = indexNextPhoto;
    }
});


function addLikeToPhoto(data, btn, likes) {

    let likedByUser = data.liked_by_user;
    let likesCounter = data.likes;
    console.log(btn);
    if (!likedByUser) {
        likesCounter++;
        data.liked_by_user = true;
        btn.classList.add('added');
    } else {
        likesCounter--;
        data.liked_by_user = false;
        btn.classList.remove('added');
    }
    console.log(likes.textContent);
    likes.textContent = likesCounter;
    console.log(likes.textContent);
    data.likes = likesCounter;
    addPhotoToLocalStorage(dataPhotos);



}