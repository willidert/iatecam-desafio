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
  displayedColumns = ['name', 'category_id', 'price', 'serie', 'actions'];
  products: Observable<Product[]>;
  constructor(
    private service: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.products = this.service.list();
  }

  ngOnInit(): void {
    this.products = this.service.list();
  }

  onAdd(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  onDelete(product_id: number): void {
    if (confirm('Delete?')) {
      this.service.delete(product_id).subscribe(() => {
        this.products = this.service.list();
        console.log(`item ${product_id} deletado.`);
      });
    }
  }

  onEdit(product_id: number): void {
    this.router.navigate(['edit', product_id], { relativeTo: this.route });
    console.log(`item ${product_id} editado.`);
  }
}
