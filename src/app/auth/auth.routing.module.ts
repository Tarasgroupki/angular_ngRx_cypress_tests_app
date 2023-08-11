import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthComponent} from "./components/auth.component";

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent
  },
  // {
  //   path: 'logout',
  //   component: AuthLogoutsComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouting { }
