import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book.type';
import { BookService } from '../services/book.service';

@Component({
  selector: 'bkl-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getAllBooks()
      .subscribe(
        (books) => {
          this.books = books;
        }
      );
  }

}
