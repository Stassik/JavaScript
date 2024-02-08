/**
 * Задание 1

Представьте, что у вас есть класс для управления библиотекой. 
В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.
 * 
 */

class Library {
    #books = [];

    get allBooks() {
        return this.#books;
    };

    addbook(title) {
        if (this.#books.includes(title)) {
            throw new Error("Такая книга уже добавлена");
        }
        this.#books.push(title);
    }

    removebook(title) {
        if (!(this.#books.includes(title))) {
            throw new Error("Такой книги нет");
        }
        this.#books.splice(this.#books.indexOf(title), 1);
    }
    hasbook(title) {
        return this.#books.includes(title);
    }

    constructor(books) {
        for (let i = 1; i < books.length; i++) {
            if (books[i].includes(books[i - 1])) {
                throw new Error("В списке дубликаты книг");
            }

        }
        this.#books = books;
    }
}

const liblrary = new Library(["Книга 2", "Книга 1", "Книга 3"]);
liblrary.addbook("Книга 4");
liblrary.addbook("Книга 5");
liblrary.addbook("Книга 6");
console.log(liblrary.allBooks);
liblrary.removebook("Книга 2");
console.log(liblrary.allBooks);
console.log(liblrary.hasbook("Книга 3"));