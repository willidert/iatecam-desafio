import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { ProductsService } from '../services/products.service';
import { Category } from './../../categories/model/category';
import { CategoriesService } from './../../categories/services/categories.service';
import { Product } from './../model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;

  categories: Category[] = [];

  constructor(
    private productService: ProductsService,
    private categoryService: CategoriesService,
    private location: Location,
    private snack: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      id: new FormControl('', { nonNullable: true }),
      name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(60)],
        nonNullable: true,
      }),
      serie: new FormControl(0, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      price: new FormControl(0, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      category_id: new FormControl<number | null>(null, {
        validators: [Validators.required],
      }),
    });

    this.categoryService.list().subscribe((data) => (this.categories = data));
  }

  ngOnInit(): void {
    const product: Product = this.route.snapshot.data['product'];

    this.productForm.setValue({
      id: product.id,
      name: product.name,
      category_id: product.category_id,
      serie: product.serie,
      price: product.price,
    });

    this.categoryService.list().subscribe((data) => (this.categories = data));
  }

  onSubmit() {
    this.productService.save(this.productForm.value).subscribe(
      (res) => this.onSucess()
      // (result) => this.onSucess()
      // (error) => this.onError()
    );
  }

  onCancel(): void {
    this.location.back();
  }

  private onSucess(): void {
    this.snack.open('Product saved!', '', { duration: 3000 });
    this.onCancel();
  }

  private onError(): void {
    this.snack.open('Error!', '', { duration: 3000 });
  }
}
