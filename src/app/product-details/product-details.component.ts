import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product-service.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  ID: any;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ID = Number(this.activatedRoute.snapshot.params.id);
    this.productService.getProduct(this.ID).subscribe(product => {
      this.product = product;
    });
  }
  showWareHouse() {}
  deleteContents() {
    this.productService.deleteProduct(this.ID).catch(result => {
      console.log(result);
    });
  }
}
