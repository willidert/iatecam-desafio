import { Category } from './../model/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  readonly API_URL = 'http://localhost:8000/categories';

  constructor(private client: HttpClient) {}

  list(): Observable<Category[]> {
    return this.client.get<Category[]>(this.API_URL);
  }

  save(category: Partial<Category>): Observable<Category> {
    if (category.id) {
      return this.update(category);
    }
    return this.create(category);
  }

  getById(id: string) {
    return this.client.get<Category>(`${this.API_URL}/${id}`);
  }

  delete(id: string) {
    return this.client.get(`${this.API_URL}/${id}`);
  }

  private create(category: Partial<Category>) {
    return this.client.post<Category>(this.API_URL, category);
  }

  private update(category: Partial<Category>) {
    return this.client.patch<Category>(
      `${this.API_URL}/${category.id}`,
      category
    );
  }
}
