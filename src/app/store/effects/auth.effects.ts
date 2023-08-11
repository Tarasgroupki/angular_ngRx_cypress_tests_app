import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of } from 'rxjs';
import {switchMap, map, withLatestFrom, mergeMap, catchError} from "rxjs/operators";

import { EAuthActions, Login } from "../actions/auth.actions";
import {Store} from "@ngrx/store";
import {AuthService} from "../../auth/services/auth.service";
import {IAuthState} from "../state/auth.state";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Login>(EAuthActions.Login),
      mergeMap(action => {
        console.log('actyion', action)
        return this._authService.getAuth(action.payload).pipe(
          map(result => ({type: EAuthActions.Login, payload: result})),
          catchError(() => of({type: 'LOGIN_FAILED'})),
        );
      })
    )
  );

  constructor(
    private _authService: AuthService,
    private actions$: Actions,
    private _store: Store<IAuthState>
  ) {}
}
