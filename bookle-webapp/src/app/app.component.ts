import { Component, OnInit } from '@angular/core';
import { books_mock } from './mock/book.mock';
import { BookService } from './services/book.service';
import { Observable } from 'rxjs/Observable';
import { Book } from './types/book.type';
import { AuthenticationService } from './services/authentication.service';
import { AuthorService } from './services/author.service';
import { Author } from './types/author.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // books = books_mock;
  
  books: Book[] = [];
  authors: Author[] = [];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    // localStorage.setItem('userInfo', JSON.stringify({
    //   nickname: 'Dasein',
    //   accessToken: '123456',
    //   role: 'Admin'
    // }));

    // this.bookService.getBooksByAuthorId('1077326')
    //   .subscribe(data => this.books = data);
    this.authorService.getAuthorsByBookId('1')
      .subscribe(data => this.authors = data);
  //   this.authenticationService.login('test@test.com', '123456')
  //     .subscribe(() => {
  //       console.log('success')
  //     }, () => {
  //       console.log('failed');
  //     });
  }
}

