import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '../model/product';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayedColumns = ['name', 'price', 'category_id', 'serie', 'actions'];
  products: Observable<Product[]>;
  constructor(
    private service: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.products = this.service.list();
    console.log(this.products);
  }

  ngOnInit(): void {
    this.products = this.service.list();
  }

  onAdd(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  onDelete(product_id: number): void {
    console.log(`item ${product_id} deletado.`);
  }

  onEdit(product_id: number): void {
    console.log(`item ${product_id} editado.`);
  }
}
