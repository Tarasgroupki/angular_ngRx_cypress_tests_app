import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from "rxjs/operators";
import {ConfigService} from "../../config.service";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getProducts() {
    return this.http.get(this.configService.API_URL + 'products', {
      headers: new HttpHeaders({'Accept': 'application/json'})
    }).pipe(map(result => result));
  }

  getProduct(id: number) {
    return this.http.get(this.configService.API_URL + 'products/' + id + '').pipe(map(result => result));
  }

  createProduct(arr: object) {
    return this.http.post(this.configService.API_URL + 'products', arr, {
      headers: new HttpHeaders({'Accept': 'application/json'})
    }).pipe(map(result => result));
  }
}
