import Book from "./Book.mjs";

export default class EBook extends Book {
    constructor(name, author, yearOfRelease, fileExtension){
        super(name, author, yearOfRelease)
        this._fileExtension = fileExtension;
    }

    static correctExt = ['epub', 'pdf', 'fb2', 'mobi', 'doc', 'docx', 'txt'];

    static convertInEbook(book, ext) {

        if(!EBook.correctExt.includes(ext.toLowerCase())) return console.log(`Передано не существующее расширение для файла ${ext}`);

        const {name, author, yearOfRelease} = book;

        const newEBook = new EBook(name, author, yearOfRelease, ext);
        
        return newEBook;
    }

    get fileExtension() {
        return this._fileExtension;
    }

    set fileExtension(value) {
        if(!EBook.correctExt.includes(value.toLowerCase())) return console.log(`Передано не существующее расширение для файла ${value}`);

        this._fileExtension = value
    }

    printInfo(){
        console.log(`Название книги: ${this._name}, автор книги: ${this._author}, год издания: ${this._yearOfRelease}, расширение файла: ${this._fileExtension}`)
    }
}