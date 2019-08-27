import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbActionsModule, NbButtonModule, NbCheckboxModule, NbDatepickerModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TransferRoutingModule, routedComponents } from './transfer-routing.module';
import { FsIconComponent } from './add-transfer/add-transfer.component';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TransferRoutingModule,
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
export class TransferModule { }
