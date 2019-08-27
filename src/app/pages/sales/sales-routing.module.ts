import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesComponent } from './sales.component';
import { AddSaleComponent } from './add-sale/add-sale.component';
import { ListSaleComponent } from './list-sale/list-sale.component';
import { ImportSaleComponent } from './import-sale/import-sale.component';

const routes: Routes = [{
  path: '',
  component: SalesComponent,
  children: [
    {
      path: 'add',
      component: AddSaleComponent,
    },
    {
      path: '',
      component: ListSaleComponent,
    },
    {
      path: 'import',
      component: ImportSaleComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule { }

export const routedComponents = [
  SalesComponent,
  ImportSaleComponent,
  ListSaleComponent,
  AddSaleComponent,
];
