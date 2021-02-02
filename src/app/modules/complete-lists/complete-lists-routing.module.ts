import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteListsPage } from './complete-lists.page';

const routes: Routes = [
  {
    path: '',
    component: CompleteListsPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteListsPageRoutingModule {}
