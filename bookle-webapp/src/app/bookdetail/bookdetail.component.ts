import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../types/book.type';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'bkl-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  bookId: string;
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookId = params['id'];
      
      this.bookService.getBookById(this.bookId)
        .subscribe(
          book => this.book = book
        );
    });
  }
}
