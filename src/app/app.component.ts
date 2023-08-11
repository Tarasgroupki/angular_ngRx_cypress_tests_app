import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularNgRx';
  route: string = '';

  constructor(private router: Router) {
    router.events.subscribe((url: any) => {
      if (url.url !== undefined) {
        this.route = url.url;
      }
    });
  }

  removeAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('LoggedIn');
    this.router.navigate(['login']);
  }
}
