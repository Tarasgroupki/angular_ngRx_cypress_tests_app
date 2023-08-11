import { createSelector } from "@ngrx/store";

import {IProductState} from "../state/product.state";

const selectProducts = (state: IProductState) => state.products;
const selectProduct = (state: IProductState) => state.product;

export const selectProductsAll = createSelector(
  selectProducts,
  (state: IProductState) => state
);

export const selectOneProduct = createSelector(
  selectProduct,
  (state: IProductState) => state
);
