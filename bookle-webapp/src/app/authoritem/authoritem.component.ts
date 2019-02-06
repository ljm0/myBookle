import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Author, BookReference } from '../types/author.type';
import { Book } from '../types/book.type';
import { Router } from '@angular/router';

@Component({
  selector: 'bkl-authoritem',
  templateUrl: './authoritem.component.html',
  styleUrls: ['./authoritem.component.css']
})
export class AuthoritemComponent implements OnChanges {

  firstThreeBooks: BookReference[];

  @Input() author: Author;

  constructor(
    private router: Router
  ) { }

  ngOnChanges() {
    if (this.author.books)
      this.firstThreeBooks = this.author.books.slice(0, 3);
  }

}
