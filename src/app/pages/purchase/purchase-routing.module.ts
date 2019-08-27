import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseComponent } from './purchase.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { ListPurchaseComponent } from './list-purchase/list-purchase.component';
import { ImportPurchaseComponent } from './import-purchase/import-purchase.component';

const routes: Routes = [{
  path: '',
  component: PurchaseComponent,
  children: [
    {
      path: 'add',
      component: AddPurchaseComponent,
    },
    {
      path: '',
      component: ListPurchaseComponent,
    },
    {
      path: 'import',
      component: ImportPurchaseComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseRoutingModule { }

export const routedComponents = [
  PurchaseComponent,
  ImportPurchaseComponent,
  ListPurchaseComponent,
  AddPurchaseComponent,
];
