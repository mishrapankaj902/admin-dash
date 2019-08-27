import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbActionsModule, NbButtonModule, NbCheckboxModule, NbDatepickerModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { PurchaseRoutingModule, routedComponents } from './purchase-routing.module';
import { FsIconComponent } from './add-purchase/add-purchase.component';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    PurchaseRoutingModule,
    Ng2SmartTableModule, 
    NbActionsModule, 
    NbButtonModule, 
    NbCheckboxModule, 
    NbDatepickerModule, 
    NbRadioModule, 
    NbSelectModule, 
    NbUserModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
  ],
})
export class PurchaseModule { }
