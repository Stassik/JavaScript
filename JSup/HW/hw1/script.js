/**
 * Задание 1

• Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

• Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

{
title: "Название альбома",
artist: "Исполнитель",
year: "Год выпуска"
}

• Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
• Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)
*/

const albums = [
    {
        title: "Альбом 1",
        artist: "Исполнитель 1",
        year: "2001"
    },
    {
        title: "Альбом 2",
        artist: "Исполнитель 2",
        year: "2002"
    },
    {
        title: "Альбом 3",
        artist: "Исполнитель 3",
        year: "2003"
    }
]

const musicCollection = {
    albums: [...albums],
    [Symbol.iterator]: function () {
        let counter = 0;
        return {
            next: (() => {
                if (counter < this.albums.length) {
                    return { value: this.albums[counter++], done: false };
                } else {
                    return { done: true };
                }
            })
        }

    }
}

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}




/*
Задание 2

Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

• Отслеживать, какой повар готовит какое блюдо.
• Записывать, какие блюда заказал каждый клиент.

Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

*/
class Chef {
    constructor(name, spec) {
        this.name = name;
        this.spec = spec;
        this.dishes = new Set();
    }
    getSpec() {
        return this.spec;
    }
    getName() {
        return this.name;
    }
    getDishes() {
        return this.dishes;
    }
}

//Добавили поваров, их специализации и блюда

const chef1 = new Chef('Виктор', 'Пицца');
chef1.dishes.add('Маргарита');
chef1.dishes.add('Пеперони');
const chef2 = new Chef('Ольга', 'Суши');
chef2.dishes.add('Филадельфия');
chef2.dishes.add('Калифорния');
const chef3 = new Chef('Дмитрий', 'Десерт');
chef3.dishes.add('Тирамису');
chef3.dishes.add('Чизкейк');

const chefsArray = [];
chefsArray.push(chef1);
chefsArray.push(chef2);
chefsArray.push(chef3);

class Client {
    constructor(name) {
        this.name = name;
        this.order = new Map();
    }

    getName() {
        return this.name;
    }
    getOrder() {
        return this.order;
    }
}


const client1 = new Client('Алексей');
client1.order.set('Пицца', 'Пеперони');
client1.order.set('Десерт', 'Тирамису');
const client2 = new Client('Мария');
client2.order.set('Суши', 'Калифорния');
client2.order.set('Пицца', 'Маргарита');
const client3 = new Client('Ирина');
client3.order.set('Десерт', 'Чизкейк');


const clientsArray = [];
clientsArray.push(client1);
clientsArray.push(client2);
clientsArray.push(client3);


clientsArray.forEach(client => {
    console.log(`Клиент ${client.getName()} заказал: `);
    for (let typeDish of client.getOrder().entries()) {
        console.log(`${typeDish[0]} - ${typeDish[1]}`);
        chefsArray.forEach(chef => {
            if (chef.getSpec() === typeDish[0]) {
                console.log('повар: ' + chef.getName());
            };
        });
    }
});

/*



Блюда и их повара:

Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:

Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
 * 
 * 
 * 
 */