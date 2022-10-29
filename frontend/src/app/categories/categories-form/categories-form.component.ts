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
    name: FormControl<string>;
  }>;

  constructor(private service: CategoriesService, private location: Location) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(128)],
        nonNullable: true,
      }),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.categoryForm.value);
    this.service
      .save(this.categoryForm.value)
      .subscribe((res) => console.log(res));
    this.onCancel();
  }

  onCancel(): void {
    this.location.back();
  }
}
