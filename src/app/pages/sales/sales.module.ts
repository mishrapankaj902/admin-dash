import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbActionsModule, NbButtonModule, NbCheckboxModule, NbDatepickerModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { SalesRoutingModule, routedComponents } from './sales-routing.module';
import { FsIconComponent } from './add-sale/add-sale.component';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    SalesRoutingModule,
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
export class SalesModule { }
