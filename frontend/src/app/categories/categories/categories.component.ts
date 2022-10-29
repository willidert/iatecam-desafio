import { Router, ActivatedRoute } from '@angular/router';
import { Category } from './../model/category';
import { Observable } from 'rxjs';
import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  displayedColumns = ['name', 'actions'];
  categories: Observable<Category[]>;

  constructor(
    private service: CategoriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories = this.service.list();
  }

  ngOnInit(): void {
    this.categories = this.service.list();
  }

  onAdd(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  onEdit(category: Category): void {
    this.router.navigate(['edit', category.id], { relativeTo: this.route });
  }
}
