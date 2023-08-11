import { Action } from "@ngrx/store";

export enum EProductActions {
  ProductsAll = '[Product[]] Get all products',
  ProductOne = '[Product] Get one product',
  ProductCreate = '[Product] Create one product'
}

export class ProductsAll implements Action {
  public readonly type = EProductActions.ProductsAll;
  // constructor(public payload: any) {}
}

export class ProductsAllPr implements Action {
  public readonly type = EProductActions.ProductsAll;
  constructor(public payload: any) {}
}

export class ProductOne implements Action {
  public readonly type = EProductActions.ProductOne;
  constructor(public payload: any) {}
}

export class ProductCreate implements Action {
  public readonly type = EProductActions.ProductCreate;
  constructor(public payload: any) {}
}

export type ProductActions = ProductsAll | ProductsAllPr | ProductOne | ProductCreate;
