import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Category } from './../model/category';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CategoriesService } from './../services/categories.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss'],
})
export class CategoriesFormComponent implements OnInit {
  categoryForm: FormGroup<{
    id: FormControl<string>;
    name: FormControl<string>;
  }>;

  constructor(
    private service: CategoriesService,
    private location: Location,
    private route: ActivatedRoute,
    private snack: MatSnackBar
  ) {
    this.categoryForm = new FormGroup({
      id: new FormControl('', { nonNullable: true }),
      name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(128)],
        nonNullable: true,
      }),
    });
  }

  ngOnInit(): void {
    const category: Category = this.route.snapshot.data['category'];

    this.categoryForm.setValue({
      id: category.id,
      name: category.name,
    });
  }

  onSubmit(): void {
    this.service.save(this.categoryForm.value).subscribe(() => this.onSucess());
  }

  private onSucess() {
    this.snack.open('Category saved', '', { duration: 3000 });
    this.onCancel();
  }

  onCancel(): void {
    this.location.back();
  }
}
