import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { IAuth } from "../interfaces/auth.model";
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import {Login} from "../../store/actions/auth.actions";
import {Observable} from "rxjs";
import {selectLogin} from "../../store/selectors/auth.selectors";
import {IAuthState} from "../../store/state/auth.state";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  title = 'app';
  auth: any = new IAuth('', '');
  authenticate: IAuth[] = [];
  errMessage = '';
  token$: Observable<IAuthState>;

  constructor(private _store: Store<IAuthState>, private _router: Router, private authService: AuthService) {
    this.token$ = this._store.select(selectLogin);
    if (localStorage.getItem('errMessage')) {
      this.errMessage = 'Неправильний логін, або пароль!';
    }
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this._router.navigate(['']);
    }
  }

  getAuth() {
    this._store.dispatch(new Login(this.auth));

    this.token$.subscribe((resAuth: any) => {
      localStorage.setItem('token', resAuth?.access_token);
      this._router.navigate(['']);
    }, () => {
        this.authenticate.length = 0;
        this.errMessage = 'Неправильний логін, або пароль!';
    });
  }

}
