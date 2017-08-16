class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        }
        else {
            this.title = title;
            this.author = author;
        }
    }
    
    display() {
        console.log('Implement the \'display\' method!')
    }
}

class myBook extends Book {
    constructor(title, author, price){
        super(title,author);
        this.price = price;
    }
    display() {
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPrice: ${this.price}`);        
    }
}

function main() {
    let title = "The Alchemist";
    let author = "Paulo Coelho";
    let price = 248;

    let book = new myBook(title, author, price)
    book.display()
}

main();