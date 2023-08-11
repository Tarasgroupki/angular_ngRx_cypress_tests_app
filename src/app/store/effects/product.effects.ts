import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { of } from 'rxjs';
import {switchMap, map, withLatestFrom, mergeMap, catchError} from "rxjs/operators";

import {Store} from "@ngrx/store";
import {ProductService} from "../../product/service/product.service";
import {EProductActions, ProductCreate, ProductOne, ProductsAll, ProductsAllPr} from "../actions/product.actions";
import {IProductState} from "../state/product.state";

@Injectable()
export class ProductEffects {
  products$ = createEffect(() =>
    this.actions$.pipe(
      ofType<ProductsAll>(EProductActions.ProductsAll),
      mergeMap(action => {
        return this._productService.getProducts().pipe(
          map(result => new ProductsAllPr(result)),
          catchError(() => of({type: 'PRODUCTS_FAILED'})),
        );
      })
    )
  );

  product$ = createEffect(() =>
  this.actions$.pipe(
    ofType<ProductOne>(EProductActions.ProductOne),
    mergeMap(action => {
      return this._productService.getProduct(action.payload).pipe(
        map(result => new ProductOne(result)),
        catchError(() => of({type: 'PRODUCT_FAILED'})),
      );
    })
  ));

  productCreate$ = createEffect(() =>
    this.actions$.pipe(
      ofType<ProductCreate>(EProductActions.ProductCreate),
      mergeMap(action => {
        return this._productService.createProduct(action.payload).pipe(
          map(result => new ProductCreate(result)),
          catchError(() => of({type: 'PRODUCT_FAILED'})),
        );
      })
    ));

  constructor(
    private _productService: ProductService,
    private actions$: Actions,
    private _store: Store<IProductState>
  ) {}
}
