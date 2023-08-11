import {ActionReducerMap} from "@ngrx/store";
import {productReducers} from "./store/reducers/product.reducers";
import {authReducers} from "./store/reducers/auth.reducers";
import {AuthActions} from "./store/actions/auth.actions";
import {ProductActions} from "./store/actions/product.actions";
import {IProductState} from "./store/state/product.state";
import {IAuthState} from "./store/state/auth.state";

export interface State {
  auth: IAuthState;
  products: IProductState;
}

export const reducers: ActionReducerMap<State, any> = {
  auth: authReducers,
  products: productReducers,
};
