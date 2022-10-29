import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProductsService } from '../services/products.service';
import { Product } from './../model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  product: Product = { name: '', price: 0, serie: 0, category_id: 0 };

  productForm: FormGroup<{
    name: FormControl<string>;
    serie: FormControl<number>;
    price: FormControl<number>;
    category_id: FormControl<number>;
  }>;

  categories = [
    { id: 1, name: 'categoria 1' },
    { id: 2, name: 'categoria 3' },
    { id: 3, name: 'categoria 2' },
  ];

  constructor(
    private productService: ProductsService,
    private location: Location,
    private snack: MatSnackBar
  ) {
    this.productForm = new FormGroup({
      name: new FormControl(this.product.name, {
        validators: [Validators.required, Validators.maxLength(60)],
        nonNullable: true,
      }),
      serie: new FormControl(this.product.serie, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      price: new FormControl(this.product.price, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      category_id: new FormControl(this.product.category_id, {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.productService.save(this.productForm.value).subscribe(
      (res) => this.onSucess()
      // (result) => this.onSucess()
      // (error) => this.onError()
    );
    this.onCancel();
  }

  onCancel(): void {
    this.location.back();
  }

  private onSucess(): void {
    this.snack.open('Product saved!', '', { duration: 3000 });
  }

  private onError(): void {
    this.snack.open('Error!', '', { duration: 3000 });
  }
}
