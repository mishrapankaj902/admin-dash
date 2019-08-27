import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ImportPeopleComponent } from './import-people/import-people.component';

const routes: Routes = [{
  path: '',
  component: PeopleComponent,
  children: [
    {
      path: 'add',
      component: AddPeopleComponent,
    },
    {
      path: '',
      component: ListPeopleComponent,
    },
    {
      path: 'import',
      component: ImportPeopleComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule { }

export const routedComponents = [
  PeopleComponent,
  ImportPeopleComponent,
  ListPeopleComponent,
  AddPeopleComponent,
];
