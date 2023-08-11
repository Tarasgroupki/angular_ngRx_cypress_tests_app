import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from "./store/effects/auth.effects";
import {AuthModule} from "./auth/auth.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {ConfigService} from "./config.service";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {ProductModule} from "./product/product.module";
import {ProductEffects} from "./store/effects/product.effects";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptor} from "./token.interceptor";
import {StoreModule} from "@ngrx/store";
import {productReducers} from "./store/reducers/product.reducers";
import { reducers } from "./index";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, ProductEffects]),
    AuthModule,
    ProductModule,
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    BrowserAnimationsModule
  ],
  providers: [ConfigService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
