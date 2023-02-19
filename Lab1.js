const users= require("./data.json")
const books = require("./books.json")

// console.log(users);
// console.log(users[0].name);
console.log("The List of books in Library are: ")

books.map((book, index)=>{
    console.log(`${index+1}- ${book.title}`)
})

console.log("The borrowed books are: ")

books.map(book=>{
    book.isBorrowed? console.log(`${book.title}`): null
})
