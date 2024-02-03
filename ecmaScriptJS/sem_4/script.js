const url = "https://www.boredapi.com/api/activity/";
const btnEl = document.querySelector('.btn');



Промисы

btnEl.addEventListener('click', function () {
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            const data = json;
            getActivity(data);
        }).catch((error) => console.log('ошибка'));
});



function getActivity(data) {
    const divEl = document.createElement('div');
    divEl.textContent = data.activity;
    document.body.appendChild(divEl);
}


// Ассинхрон


// async function getActive(url) {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
// }
// btnEl.addEventListener('click', async () => {
//     try {
//         const data = await getActive(url);
//         const divEl = document.createElement('div');
//         divEl.textContent = data.activity;
//         document.body.appendChild(divEl);

//     } catch (error) {
//         console.log('ошибка');
//     }

// });


const demoKey = 'VG7hcoFMcSvGDhlJh3ylikHVk7Q8Q4Op8ZFDomGN';
const url = 'https://api.nasa.gov/planetary/apod?api_key=' + demoKey + '&count=10';

async function getActive(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

try {
    const data = await getActive(url);
    const bodyEl = document.querySelector('body');
    data.forEach(element => {
        bodyEl.insertAdjacentHTML('beforeend',
            `<figure>
                <img src="${element.url}" alt="" />
                <figcaption>${element.explanation}</figcaption>
            </figure>`);

    });

    console.log(data);
} catch (error) {
    console.log('ошибка');
}