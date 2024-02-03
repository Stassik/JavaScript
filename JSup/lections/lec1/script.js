const symbol = Symbol(); // объяление
const dogId = Symbol('dog'); // значение уникально, даже если мы создадим несколько символов с одинаковым описанием

const dog1 = Symbol('dog');
const dog2 = Symbol('dog');

console.log(dog1 == dog2) // false

alert(dogId); // TypeError: cannot convert a Symbol value to a string
console.log(dogId) // Symbol(dog)
console.log(dogId.description) // dog

let id = Symbol('dogID');
let buddy = {
    [id]: 'Жучка'
}
console.log(buddy[id]); // Жучка




