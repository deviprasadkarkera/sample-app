import { Component } from '@angular/core';
import {ProductService} from './product-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sample Products';
  constructor(private router: Router) {}
  showDetails() {
    // this.router.navigate('./product-details/:1224');
  }
}
