import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectProductsAll} from "../../store/selectors/product.selectors";
import {IProductState} from "../../store/state/product.state";
import {ProductsAll} from "../../store/actions/product.actions";

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title = 'app';
  products$: Observable<any>;
  displayedColumns = ['id', 'title', 'description', 'price'];

  constructor(private _store: Store<IProductState>, private _router: Router) {
    this.products$ = this._store.select(selectProductsAll);
  }

  ngOnInit() {
    this._store.dispatch(new ProductsAll());
  }
}
