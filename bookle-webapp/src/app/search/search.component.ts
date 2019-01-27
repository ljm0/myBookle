import { Component, OnInit } from '@angular/core';
import { SearchOption } from '../types/search-option.type';
import { books_mock } from '../mock/book.mock';

import { BookService } from '../services/book.service';
import { Book } from '../types/book.type';

@Component({
  selector: 'bkl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  books = [];
  // authors = [];
  
  searchResult = null;

  searchBook: SearchOption = { 
    doSearch: (text) => {
      this.books = books_mock;
      this.searchResult = 'book';
    }
  };

  // searchAuthor: SearchOption = { 
  //   doSearch: (text) => {
  //     this.authors = authors_mock;
  //     this.searchResult = 'author';
  //   }
  // };

  searchOption: SearchOption = this.searchBook;

  // constructor() { }
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooksByAuthorId('1077326')
      .subscribe(data => this.books = data);
  }

  onClick(message, bool) {
    console.log(message, bool);
  }

}

