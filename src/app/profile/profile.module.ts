import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { ProfileComponent } from './profile.component';
//import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    NbMenuModule,
    ThemeModule,
  ],
  declarations: [
    ProfileComponent,
  ],
})
export class ProfileModule {
}
