import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from "../product-service.service";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService) { }
  products: any[];
  search: FormControl;
  ngOnInit() {
    this.search = new FormControl();
    this.productService.getProducts().subscribe(response => {
      this.products = response;
    });
  }
  searchProduct() {
    console.log(this.search.value);
  }
}
