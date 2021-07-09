//Tillman code with me Objects practice
var libraryDatabase = loadDatabase();




function loadDatabase() {
    libraryDatabase.push(new Book('Moby Dick', 'Jane Tills', '11111'));
    libraryDatabase.push(new Book("White Fang", "John Tills", "2222"));
    libraryDatabase.push(new Book("On Crime and Punishment", "Bobby Brown", "3333"));
}




function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
