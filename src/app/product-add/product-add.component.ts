import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ProductService} from '../product-service.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  addProductForm: FormGroup;

//  flag = true;
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.addProductForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      size: new FormControl(null, Validators.required),
      brand: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      description: new FormControl(null,),
    });
  }

  OnSubmit() {
    this.productService.addProduct(this.addProductForm.value);
  }

  updateForm() {
    this.productService.updateProduct(this.addProductForm.value);
  }

  // disp() {
  //   this.flag = false;
  // }
}


