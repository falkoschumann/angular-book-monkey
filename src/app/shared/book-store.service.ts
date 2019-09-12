import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from '../shared/book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'http://localhost:4300';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<any[]>(`${this.api}/books`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<any>(`${this.api}/books/${isbn}`);
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/books/${isbn}`, { responseType: 'text' });
  }

}
