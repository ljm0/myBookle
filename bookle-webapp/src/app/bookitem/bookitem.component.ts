import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../types/book.type';

@Component({
  selector: 'bkl-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {

  @Input() book: Book;
  @Input() index: number;
  // selectedBook: Book;
  constructor() { }

  ngOnInit() {
    this.index += 1;
  }


  // onSelect(book: Book): void {
  //   this.selectedBook = book;
  // }
}
