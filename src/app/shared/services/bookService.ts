import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/createBookModel';
import { EndpointModel } from '../models/endpointModel';
import { FilterTextModel } from '../models/FilterBook';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient, private endpoint: EndpointModel) {}

  postAddProduct(book: BookModel): Observable<any> {
    return this.http.post(this.endpoint.createBookRoute, book);
  }
  getAllBooks(): Observable<any> {
    return this.http.get(this.endpoint.getAllBooksRoute);
  }
  getBook(book: FilterTextModel): Observable<any> {
    return this.http.post(this.endpoint.getTheBookRoute, book);
  }
  getAllWords(): Observable<any> {
    return this.http.get(this.endpoint.getWordsFromUserRoute);
  }
}
