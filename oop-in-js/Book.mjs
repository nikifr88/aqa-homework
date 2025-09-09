export default class Book {
  constructor(name, author, yearOfRelease){
    this._name = name;
    this._author = author;
    this._yearOfRelease = yearOfRelease;
  }

  static oldestBook(arr) {
    arr.sort((a,b) => a.yearOfRelease - b.yearOfRelease);
    return console.log(arr[0])
  }

  get name(){
    return this._name;
  }

  set name(value) {
    if(typeof(value) !== "string" || value.length < 3) {
      console.log(`Передано невалидное значение: ${value}`);
      return;
    } else {
      this._name = value;
    }
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if(typeof(value) !== "string" || value.length < 2) {
      console.log(`Передано невалидное значение: ${value}`);
      return;
    } else {
      this._author = value;
    }
  }

  get yearOfRelease() {
    return this._yearOfRelease;
  }

  set yearOfRelease(value) {
    if(typeof(value) !== "number" || value <= 0) {
      console.log(`Передано невалидное значение: ${value}`);
      return;
    } else {
      this._yearOfRelease = value
    }
  }

  printInfo(){
    console.log(`Название книги: ${this._name}, автор книги: ${this._author}, год издания: ${this._yearOfRelease}`)
  }
}