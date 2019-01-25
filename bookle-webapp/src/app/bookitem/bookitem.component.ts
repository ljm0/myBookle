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

  constructor() { }

  ngOnInit() {
    this.index += 1;
  }
}
