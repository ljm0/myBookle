import { Component, OnInit } from '@angular/core';
import { books_mock } from './mock/book.mock';
import { BookService } from './services/book.service';
import { Observable } from 'rxjs/Observable';
import { Book } from './types/book.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // books = books_mock;
  
  books: Book[] = [];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getBooksByAuthorId('1077326')
      .subscribe(data => this.books = data);
  }
}
