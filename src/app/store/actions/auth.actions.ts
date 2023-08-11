import { Action } from "@ngrx/store";
import { IAuth } from "../../auth/interfaces/auth.model";

export enum EAuthActions {
  Login = '[string] Login user',
  Register = '[User] Register user'
}

export class Login implements Action {
  public readonly type = EAuthActions.Login;
  constructor(public payload: any) {}
}

// export class Register implements Action {
//   public readonly type = EAuthActions.Register;
//   constructor(public payload: IAuth) {}
// }

export type AuthActions = Login;
