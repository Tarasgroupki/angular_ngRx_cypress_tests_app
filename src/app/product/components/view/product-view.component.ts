import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectOneProduct} from "../../../store/selectors/product.selectors";
import {IProductState} from "../../../store/state/product.state";
import {ProductOne} from "../../../store/actions/product.actions";

@Component({
  selector: 'app-product',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  title = 'app';
  product$: Observable<any>;

  constructor(private _store: Store<IProductState>, private _router: Router, private route: ActivatedRoute) {
    this.product$ = this._store.select(selectOneProduct);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._store.dispatch(new ProductOne(params.id))
    });
  }

}
