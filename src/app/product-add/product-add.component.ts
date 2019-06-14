import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ProductService} from '../product-service.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  addProductForm: FormGroup;
  ID;
  product;
  @Input() editProd;
  @Input() flag;
  hideSubmit = true;
  hideUpdate = true;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.addProductForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      size: new FormControl(null, Validators.required),
      brand: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      description: new FormControl(null)
    });
    this.ID = this.activatedRoute.snapshot.params.id;
    this.productService.getProduct(this.ID).subscribe(product => {
     this.product = product;
     if (Number(this.activatedRoute.snapshot.params.flag) === 1) {
        this.hideUpdate = false;
        this.hideSubmit = true;
        console.log(this.product.id)
        this.addProductForm.setValue({
          id: this.product.id,
          imageUrl: this.product.imageUrl,
          price: this.product.price,
          size: this.product.size,
          brand: this.product.brand,
          quantity: this.product.quantity,
          description: this.product.description
        });
      } else {
        this.hideSubmit = false;
        this.hideUpdate = true;
      }
    });
  }

  OnSubmit() {
    this.productService.addProduct(this.addProductForm.value);
  }

  updateForm() {
    this.productService.updateProduct(this.addProductForm.value);
  }
}


