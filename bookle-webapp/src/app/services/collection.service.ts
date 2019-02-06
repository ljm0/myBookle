import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../types/book.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class CollectionService {

  private apiRoot = environment.apiEndpoint;

  constructor(
    private http: HttpClient
  ) { }

  getBooksInCollection(collectionId: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiRoot}/Collections/${collectionId}/books`);
  }

  addBookToCollection(collectionId: string, bookId: string): Observable<any> {
    return this.http.put<any>(`${this.apiRoot}/Collections/${collectionId}/books/rel/${bookId}`, {});
  }

  removeBookFromCollection(collectionId: string, bookId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiRoot}/Collections/${collectionId}/books/rel/${bookId}`);
  }


}
