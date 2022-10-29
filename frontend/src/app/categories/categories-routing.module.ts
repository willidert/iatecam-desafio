import { CategoriesResolver } from './guards/categories.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  {
    path: 'create',
    component: CategoriesFormComponent,
    resolve: { category: CategoriesResolver },
  },
  {
    path: 'edit/:id',
    component: CategoriesFormComponent,
    resolve: { category: CategoriesResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
