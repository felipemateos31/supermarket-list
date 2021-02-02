import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'pending-lists',
        pathMatch: 'full'
      },
      {
        path: 'pending-lists',
        loadChildren: () => import('./../pending-lists/pending-lists.module').then(m => m.PendingListsPageModule)
      },
      {
        path: 'complete-lists',
        loadChildren: () => import('./../complete-lists/complete-lists.module').then(m => m.CompleteListsPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
