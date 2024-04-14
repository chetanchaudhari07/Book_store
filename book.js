function Author(name,birthyear,nationality){
    this.name = name;
    this.birthyear = birthyear;
    this.nationality = nationality;


}

function Book(title,author,genre,price){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;


}

Book.prototype.getBookInfo = function() {
    console.log( this.title);
    console.log( this.author.name);
    console.log(this.genre);
    console.log(this.price.toFixed(2));
}

let author1 = new Author("J.K. Rowling", 1965, "British");
let author2 = new Author("George Orwell", 1903, "British");

let book1 = new Book("Harry Potter and the Philosopher's Stone", author1, "Fantasy", 15.99);
let book2 = new Book("1984", author2, "Dystopian Fiction", 12.49);

book1.getBookInfo();
book2.getBookInfo();