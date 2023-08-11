import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { ProductComponent } from "./components/product.component";
import {ProductViewComponent} from "./components/view/product-view.component";
import {ProductCreateComponent} from "./components/create/product-create.component";

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'create',
    component: ProductCreateComponent,
  },
  {
    path: ':id',
    component: ProductViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRouting { }
