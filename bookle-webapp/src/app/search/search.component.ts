import { Component, OnInit } from '@angular/core';
import { SearchOption } from '../types/search-option.type';
import { books_mock } from '../mock/book.mock';

import { BookService } from '../services/book.service';
import { Book } from '../types/book.type';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'bkl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  books = [];
  authors = [];
  searchResult = null;

  // constructor() { }
  constructor(
    private bookService: BookService,
    private authorService: AuthorService
  ) { }

  searchBook: SearchOption = { 
    doSearch: (text) => {
      this.bookService.searchBooks(text)
        .subscribe(data => {
          this.books = data;
          this.searchResult = 'book';
        }, (err) => {
          console.log(err);
        });
    }
  };

  searchAuthor: SearchOption = { 
    doSearch: (text) => {
      this.authorService.searchAuthors(text)
        .subscribe(data => {
          this.authors = data;
          this.searchResult = 'author';
        }, (err) => {
          console.log(err);
        });
    }
  };

  searchOption: SearchOption = this.searchBook;

  ngOnInit() {
  }

}

