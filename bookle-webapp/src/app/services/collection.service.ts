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

  getBooksByAuthorId(authorId: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiRoot}/Authors/${authorId}/books`);
  }

}
