/**
 * Задание 1 (тайминг 20 минут)
Текст задания
1. Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию)
2. Создайте функцию которая возводит переданное число в
квадрат
3. Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'.
 *
 */

// function hello(firstname, name, age) {
//     alert(`Привет ${name} ${firstname} с возрастом ${age}`);
// }

// hello("Пупкин", "Василий", 40);

// const squareNumber = (number) => {
//     return number * number;
// }

// alert(squareNumber(32));

// function checkNumber(number) {
// console.log((number > 0) ? "+++" : "---");
// }

// checkNumber(1);


/**1. Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел.
2. С помощью созданной вами функции выведите в консоль сумму
значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
1. Дана фукнция
function func(num = 5) {
console.log(num * num);
}
Расскажите, каким будет результат каждого из вызовов функции.
func(2);
func(3);
func(); */

// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// function sumOfNumbers(num1, num2, num3) {
//     console.log(num1 + num2 + num3);
// }
// sumOfNumbers(param1, param2, param3);

/**
 * Задание 3 (тайминг 15 минут)
1. Сделайте функцию, которая параметром принимает число, а
возвращает квадратный корень из этого числа. С помощью этой
функции найдите корень числа 3, затем найдите корень числа 4.
Просуммируйте полученные результаты и выведите их в консоль.
2. Создайте функцию, которая находит минимальное число из 2х
передаваемых аргументов функции
 */

// let squareNumber = (number) => {
//     return number * number;
// }

// function sumNumbers() {
//     console.log(squareNumber(3) + squareNumber(4));
// }

// sumNumbers();

// const minNumber = (num1, num2) => {
//     if (num1 < num2) {
//         return num1
//     }
//     else { return num2; }
// }

// alert(minNumber(9, 3));


/**
 * Задание 4 (тайминг 25 минут)
1. Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.
2. Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван)
 */

// function weekDay(dayNum) {
//     switch(dayNum) {
//         case 1:
//             return 'Понедельник';
//         case 2:
//             return 'Вторник';
//         case 3:
//             return 'Среда';
//         case 4:
//             return 'Четверг';
//         case 5:
//             return 'Пятница';
//         case 6:
//             return 'Суббота';
//         case 7:
//             return 'Воскресенье';
//     }
// }

// const day = +prompt("Введите число от 1 до 7");
// alert(((day >= 1) && (day <= 7)) ? weekDay(day) : "Вы ввели неверно число");

// /**
//  *
//  * @param {string} name
//  * @returns {string}
//  */
// function greetings(name) {
//     const hour = new Date().getHours();
//     if (hour < 6) {
//         return `Доброй ночи, ${name}`;
//     } else if ((hour >= 6) && (hour < 12)) {
//         return `Доброе утро, ${name}`;
//     } else if ((hour >= 12) && (hour < 18)) {
//         return `Добрый день ${name}`;
//     } return `Добрый вечер ${name}`;
// }

// alert(greetings('Анастасия'));

// function pow(num, grade) {
//     if (grade === 0) {
//         return 1;
//     }
//     return num * pow(num, grade - 1);
// }

// alert(pow(2, 10));








