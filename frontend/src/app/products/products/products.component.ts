import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../model/product';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayedColumns = ['name', 'serie', 'price', 'category_id'];
  products: Observable<Product[]>;
  constructor(private service: ProductsService) {
    this.products = this.service.list();
    console.log(this.products);
  }

  ngOnInit(): void {}

  onAdd(): void {
    console.log('on add.');
  }

  onDelete(product_id: number): void {
    console.log(`item ${product_id} deletado.`);
  }

  onEdit(product_id: number): void {
    console.log(`item ${product_id} editado.`);
  }
}
