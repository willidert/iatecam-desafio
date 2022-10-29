import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [ProductsComponent, ProductFormComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
  ],
})
export class ProductsModule {}
