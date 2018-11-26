import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Product} from './product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product[];
  readonly baseURL: string="http://localhost:3000/products";
  constructor(private http: HttpClient) { }
  getArticle(){
    return this.http.get(this.baseURL);
  }
}
