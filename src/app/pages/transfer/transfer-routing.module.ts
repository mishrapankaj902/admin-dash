import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferComponent } from './transfer.component';
import { AddTransferComponent } from './add-transfer/add-transfer.component';
import { ListTransferComponent } from './list-transfer/list-transfer.component';
import { ImportTransferComponent } from './import-transfer/import-transfer.component';

const routes: Routes = [{
  path: '',
  component: TransferComponent,
  children: [
    {
      path: 'add',
      component: AddTransferComponent,
    },
    {
      path: '',
      component: ListTransferComponent,
    },
    {
      path: 'import',
      component: ImportTransferComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferRoutingModule { }

export const routedComponents = [
  TransferComponent,
  ImportTransferComponent,
  ListTransferComponent,
  AddTransferComponent,
];
