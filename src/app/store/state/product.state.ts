import {IProduct} from "../../product/interfaces/product.model";

export interface IProductState {
  products: any;
  product: any;
}

export const initialProductState: IProductState = {
  products: [],
  product: ''
};
