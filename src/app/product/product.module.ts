import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "./service/product.service";
import {ProductComponent} from "./components/product.component";
import {MaterialModule} from "../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProductRouting} from "./product.routing.module";
import {HttpClientModule} from "@angular/common/http";
import {ProductViewComponent} from "./components/view/product-view.component";
import {ProductCreateComponent} from "./components/create/product-create.component";

@NgModule({
  declarations: [ProductComponent, ProductViewComponent, ProductCreateComponent],
  imports: [
    CommonModule,
    ProductRouting,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ProductService],
  exports: [ProductComponent, ProductViewComponent, ProductCreateComponent]
})
export class ProductModule { }
