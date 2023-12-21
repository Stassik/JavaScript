/**
 * Задание 1: ""Управление библиотекой книг""

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
*/

class Book {
    displayInfo() {
        console.log(`Название: ${this.title} | Автор: ${this.author} | Количество страниц: ${this.pages}`);
    }
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const newBook = new Book('"О рыбаке и рыбке"', 'Пушкин А. С.', 35);
newBook.displayInfo();

/*

Задание 2: ""Управление списком студентов""
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
javascript

// Пример использования класса
const student1 = new Student(""John Smith"", 16, ""10th grade"");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade" 
*/

class Student {
    displayInfo() {
        console.log(
            `Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}\n`
        );
    }
    constructor(name, age, grade) {
        this.grade = grade;
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();