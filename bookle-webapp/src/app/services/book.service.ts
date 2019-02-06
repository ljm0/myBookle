import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../types/book.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class BookService{

  private apiRoot = environment.apiEndpoint;

  constructor(
    private http: HttpClient
  ) { }

  getBooksByAuthorId(authorId: string, withAuthors: boolean = false): Observable<Book[]> {
    if (withAuthors) {
      return this.http.get<Book[]>(`${this.apiRoot}/Authors/${authorId}/books?filter[include]=authors`);
    } else {
      return this.http.get<Book[]>(`${this.apiRoot}/Authors/${authorId}/books`);
    }
  }

  searchBooks(searchText: string): Observable<Book[]> {
    return this.http.get<any>(`${this.apiRoot}/Books/search?text=${searchText}`)
      .pipe(
        map(({ data }) => data)
      );
  }

  getBookById(bookId: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiRoot}/Books/${bookId}?filter[include]=authors`);
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiRoot}/Books`);
  }

  createBook(book): Observable<any> {
    return this.http.post<any>(`${this.apiRoot}/Books`, book);
  }

  deleteBookById(bookId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiRoot}/Books/${bookId}`);
  }

}
