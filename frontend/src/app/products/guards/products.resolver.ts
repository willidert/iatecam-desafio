import { Product } from './../model/product';
import { ProductsService } from './../services/products.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<Product> {
  constructor(private service: ProductsService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    if (route.params && route.params['id']) {
      return this.service.getById(route.params['id']);
    }
    return of({ id: '', name: '', serie: 0, category_id: 0, price: 0 });
  }
}
