import Book from "./Book.mjs";
import EBook from "./EBook.mjs";

//Task 1
console.log('Task 1');
const firstBook = new Book('Кобзарь', 'Тарас Григорьевич Шевченко', 1840)
firstBook.printInfo();

const secondBook = new Book('Энеида', 'Иван Петрович Котляревский', 1842)
secondBook.printInfo();

console.log('\n')

//Task 2
console.log('Task 2');
const firstEBook = new EBook('Кобзарь', 'Тарас Григорьевич Шевченко', 1840, 'pdf')
firstEBook.printInfo();

const secondEBook = new EBook('Энеида', 'Иван Петрович Котляревский', 1842, "ePub")
secondEBook.printInfo();

console.log('\n')

//Task 3
console.log('Task 3');
firstBook.author = 'Шевченко'; //валидный кейс
firstBook.author = 234234; //не валидный кейс
console.log(firstBook.author);

secondBook.name = 'Книга'; //валидный кейс
secondBook.name = 'ww'; //не валидный кейс
console.log(secondBook.name);

firstEBook.yearOfRelease = 333 //валидный кейс
firstEBook.yearOfRelease = -44 //не валидный кейс
console.log(firstEBook.yearOfRelease);

secondEBook.fileExtension = 'txt' //валидный кейс
secondEBook.fileExtension = 'exe' //не валидный кейс
console.log(secondEBook.fileExtension);

console.log('\n')
//Task 4
console.log('Task 4');
Book.oldestBook([firstBook, secondBook, firstEBook, secondEBook]);

console.log('\n')

//Task 5
console.log('Task 5');
console.log(EBook.convertInEbook(firstBook, 'txt'));