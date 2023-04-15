import { Component } from '@angular/core';

interface Book {
  title: string;
  author: string;
  pages: number;
  coverUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public readonly books: Book[] = [
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "pages": 281,
      "coverUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg"
    },
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "pages": 180,
      "coverUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg"
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "pages": 328,
      "coverUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427.jpg"
    },
    {
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "pages": 279,
      "coverUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885.jpg"
    },
    {
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel Garcia Marquez",
      "pages": 417,
      "coverUrl": "https://m.media-amazon.com/images/I/81MI6+TpYkL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "pages": 224,
      "coverUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg"
    },
    {
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "pages": 1178,
      "coverUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg"
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "pages": 310,
      "coverUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1372847500l/5907.jpg"
    },
    {
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "pages": 197,
      "coverUrl": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1483412266l/865.jpg"
    },
    {
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "pages": 193,
      "coverUrl": "https://m.media-amazon.com/images/I/81XSN3hA5gL._AC_UF1000,1000_QL80_.jpg"
    }
  ];
  public filteredBooks?: Book[] | null;
  public selectedBook?: Book;
  public isSearchActive = false;
  public isAddActive = false;
  public isSecondaryMenuActive = false;
  public searchBookPhrase = '';
  public newBook: Book = {
    title: '',
    author: '',
    pages: 0,
    coverUrl: ''
  };

  public selectBook(book: Book): void {
    this.selectedBook = book;
  }

  public searchBook(): void {
    if (!this.searchBookPhrase) {
      this.filteredBooks = null;
      return;
    }

    const loweredPhrase = this.searchBookPhrase.toLowerCase();
    this.filteredBooks = this.books.filter(book => {
      const loweredTitle = book.title.toLowerCase();
      const loweredAuthor = book.author.toLowerCase();

      return loweredTitle.includes(loweredPhrase) || loweredAuthor.includes(loweredPhrase);
    });
  }

  public addBook(): void {
    this.filteredBooks = null;
    this.books.push(this.newBook);
    this.newBook = {
      title: '',
      author: '',
      pages: 0,
      coverUrl: ''
    };
  }

  public showSearch(): void {
    this.isAddActive = false;
    this.isSearchActive = true;
    this.isSecondaryMenuActive = true;
  }

  public showAddForm(): void {
    this.isSearchActive = false;
    this.isAddActive = true;
    this.isSecondaryMenuActive = true;
  }

  public hideSecondaryMenu() {
    this.isSecondaryMenuActive = false;
  }
}
