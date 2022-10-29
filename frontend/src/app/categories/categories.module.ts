import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [CategoriesComponent, CategoriesFormComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
})
export class CategoriesModule {}
