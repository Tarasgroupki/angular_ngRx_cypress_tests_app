import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./services/auth.service";
import {AuthComponent} from "./components/auth.component";
import {MaterialModule} from "../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthRouting} from "./auth.routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRouting,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  exports: [AuthComponent]
})
export class AuthModule { }
