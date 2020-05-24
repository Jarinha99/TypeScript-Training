import Book from "./model/book";
import $ from "jquery";

const book = new Book("Any book", 57.0, 20);
// console.log(book.priceWithDescount());

$("body").append(`<h1>${book.name}</h1>`);
$("body").append(`<h2>${book.priceWithDescount()}</h2>`);
