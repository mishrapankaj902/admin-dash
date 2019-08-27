import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbActionsModule, NbButtonModule, NbCheckboxModule, NbDatepickerModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ProductsRoutingModule, routedComponents } from './products-routing.module';
import { FsIconComponent } from './add-product/add-product.component';


@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    ProductsRoutingModule,
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
export class ProductsModule { }
