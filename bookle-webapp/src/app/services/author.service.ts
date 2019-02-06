import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Author } from '../types/author.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthorService {

  private apiRoot = environment.apiEndpoint;

  constructor(
    private http: HttpClient
  ) { }

  getAuthorsByBookId(bookId: string): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.apiRoot}/Books/${bookId}/authors`);
  }

  searchAuthors(searchText: string): Observable<Author[]> {
    return this.http.get<any>(`${this.apiRoot}/Authors/search?text=${searchText}`)
      .pipe(
        map(({ data }) => data)
      );
  }

  getAuthorById(authorId: string): Observable<Author> {
    return this.http.get<Author>(`${this.apiRoot}/Authors/${authorId}?filter[include]=books`);
  }

}
