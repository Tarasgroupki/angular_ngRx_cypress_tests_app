import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../interfaces/product.model";
import {Store} from "@ngrx/store";
import {IProductState} from "../../../store/state/product.state";
import {Router} from "@angular/router";
import {ProductCreate} from "../../../store/actions/product.actions";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  product: IProduct = new IProduct('', '', '123');

  constructor(private _store: Store<IProductState>, private _router: Router) {}

  addProduct() {
    this._store.dispatch(new ProductCreate(this.product));
    this._router.navigate(['']);
  }

  ngOnInit() {

  }
}
