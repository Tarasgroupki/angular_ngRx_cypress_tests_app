import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "./auth/services/auth.service";
import {IAuthState} from "./store/state/auth.state";
import {selectLogin} from "./store/selectors/auth.selectors";
import {Store} from "@ngrx/store";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token$: Observable<IAuthState>;
  token: string = '';

  constructor(private _store: Store<IAuthState>, private authService: AuthService) {
    this.token$ = this._store.select(selectLogin);
    this.token$.subscribe((res: any) => {
      this.token = res?.access_token;
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: ''+localStorage.getItem('token') || this.token
      }
    });
    return next.handle(tokenizedReq);
  }
}
