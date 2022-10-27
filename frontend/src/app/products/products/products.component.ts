import { Observable } from 'rxjs';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

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
}
