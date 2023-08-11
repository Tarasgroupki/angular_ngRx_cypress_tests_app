import {initialProductState, IProductState} from "../state/product.state";
import { ProductActions, EProductActions } from "../actions/product.actions";

export const productReducers = (
  state = initialProductState,
  action: ProductActions
): IProductState => {
  switch (action.type) {
    case EProductActions.ProductsAll:
      return (action as any)?.payload;
    case EProductActions.ProductOne:
      return action?.payload;
    case EProductActions.ProductCreate:
      return action?.payload;
    default:
      return state;
  }
};
