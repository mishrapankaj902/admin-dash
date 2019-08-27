import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ImportProductComponent } from './import-product/import-product.component';

const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [
    {
      path: 'add',
      component: AddProductComponent,
    },
    {
      path: '',
      component: ListProductComponent,
    },
    {
      path: 'import',
      component: ImportProductComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }

export const routedComponents = [
  ProductsComponent,
  ImportProductComponent,
  ListProductComponent,
  AddProductComponent,
];
