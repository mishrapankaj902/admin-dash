import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbActionsModule, NbButtonModule, NbCheckboxModule, NbDatepickerModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { PeopleRoutingModule, routedComponents } from './people-routing.module';
import { FsIconComponent } from './add-people/add-people.component';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    PeopleRoutingModule,
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
export class PeopleModule { }
