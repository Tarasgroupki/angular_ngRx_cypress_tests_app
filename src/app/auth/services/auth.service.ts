import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from "rxjs/operators";
import {ConfigService} from "../../config.service";

@Injectable()
export class AuthService {

  token: any = new BehaviorSubject(null);
  permissions = new BehaviorSubject(null);
  errMessage = new BehaviorSubject(null);

  constructor(private http: HttpClient, private configService: ConfigService) { }

  getAuth(arr: object) {
    return this.http.post(this.configService.API_URL + 'auth/login', arr, {
      headers: new HttpHeaders({'Accept': 'application/json',})
    }).pipe(map(result => result));
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !!token;
  }

}
