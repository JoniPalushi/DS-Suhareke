function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    
    this.getSummary = function() {
        return `${this.title} by ${this.author} has ${this.pages} pages.`;
    };
}


const myBook = new Book('Ditari i Gregut', 'Jeff Kinney',350 );
console.log(myBook.getSummary());  
