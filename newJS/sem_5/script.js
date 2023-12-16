const contentBox = document.querySelector('.content');

let playerEl = document.createElement('video');
playerEl.classList.add('video');
playerEl.src = 'img/1.mp4';
playerEl.poster = 'img/pre.jpg';
playerEl.volume = 0.5;

let playerElControls = document.createElement('div');
playerElControls.classList.add('controls');

let playerElBtn = document.createElement('div');
playerElBtn.classList.add('player__btn', 'player__btn_pause');
let btnIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
btnIcon.classList.add('btn-icon');
let btnIconUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
btnIconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/sprite.svg#play')


let playerElVolume = document.createElement('input');
playerElVolume.type = 'range';
playerElVolume.classList.add('player__volume');
playerElVolume.min = 0;
playerElVolume.max = 10;
playerElVolume.value = 5;

let playerElProgress = document.createElement('input');
playerElProgress.type = 'range';
playerElProgress.classList.add('player__progress');
playerElProgress.min = 0;
playerElProgress.max = 100;


let volEl = document.createElement('div');
volEl.classList.add('player__btn', 'player__btn_vol');
let volIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
volIcon.classList.add('btn-icon');
let volIconUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
volIconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/sprite.svg#volMed');


volEl.addEventListener('click', function(e){
    if (playerElVolume.value > 0) {
        playerElVolume.value = 0;
        playerEl.volume = playerElVolume.value;
        
        volIconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/sprite.svg#mute');
    } else {
        playerElVolume.value = 5;
        playerEl.volume =playerElVolume.value/10;
        volIconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/sprite.svg#volMed');
    }
});



playerElVolume.addEventListener('change', function (e) {
    playerEl.volume = e.target.value / 10;
    if (playerEl.volume === 0) {
        volIconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/sprite.svg#mute');

    } else if (playerEl.volume > 0.5) {
        volIconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/sprite.svg#volHigh');

    } else {
        volIconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/sprite.svg#volMed');
    }
});

playerElProgress.addEventListener('change', function (e) {
    playerEl.currentTime = e.target.value * playerEl.duration / 100;

});

let playerTime = document.createElement('span');
playerTime.classList.add('currentTime');
playerTime.textContent = '0:00';

playerEl.addEventListener('timeupdate', function (e) {
    let time = Math.round(Number(playerEl.currentTime));
    playerElProgress.value = Math.round((playerEl.currentTime / playerEl.duration) * 100);
    if (playerEl.currentTime === playerEl.duration) {
        btnIconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/sprite.svg#play');
    }

    if (time < 10) {
        playerTime.textContent = `0:0${time}`;
    }
    else if (time >= 10 && time < 60) {
        playerTime.textContent = `0:${time}`;
    }
    else if (time >= 60) {
        if ((time % 60 === 0)) {
            playerTime.textContent = `${(Math.round(Number(playerEl.currentTime) / 60))}:0${time % 60}`;
        }
        else {
            if (Math.round(Number(playerEl.currentTime) % 60) < 10) {
                playerTime.textContent = `${(Math.floor(Number(playerEl.currentTime) / 60))}:0${time % 60}`;
            } else {
                playerTime.textContent = `${(Math.floor(Number(playerEl.currentTime) / 60))}:${time % 60}`;
            }
        }
    }
});

playerElBtn.addEventListener('click', function (e) {
    if (this.classList.contains('player__btn_play')) {

        playerElBtn.classList.remove('player__btn_play');
        playerElBtn.classList.add('player__btn_pause');
        btnIconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/sprite.svg#play');
        playerEl.pause();

    } else if (this.classList.contains('player__btn_pause')) {

        playerElBtn.classList.remove('player__btn_pause');
        playerElBtn.classList.add('player__btn_play');
        btnIconUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'img/sprite.svg#pause');
        playerEl.play();
    }
});




contentBox.appendChild(playerEl);
contentBox.appendChild(playerElControls);
playerElControls.appendChild(playerElBtn);
playerElBtn.appendChild(btnIcon);
btnIcon.appendChild(btnIconUse);

playerElControls.appendChild(volEl);
volEl.appendChild(volIcon);
volIcon.appendChild(volIconUse);
playerElControls.appendChild(playerElVolume);
playerElControls.appendChild(playerElProgress);
playerElControls.appendChild(playerTime);




