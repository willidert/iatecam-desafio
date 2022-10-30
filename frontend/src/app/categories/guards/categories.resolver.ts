import { CategoriesService } from './../services/categories.service';
import { Category } from './../model/category';
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
export class CategoriesResolver implements Resolve<Category> {
  constructor(private service: CategoriesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Category> {
    if (route.params && route.params['id']) {
      return this.service.getById(route.params['id']);
    }
    return of({ id: '', name: '' });
  }
}
