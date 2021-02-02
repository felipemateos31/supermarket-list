import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingListsPage } from './pending-lists.page';

const routes: Routes = [
  {
    path: '',
    component: PendingListsPage,
    children: [
      {
        path: '',
        redirectTo: 'lists',
        pathMatch: 'full'
      },
      {
        path: 'lists',
        loadChildren: () => import('./lists/lists.module').then(m => m.ListsPageModule),
      },
      {
        path: 'list-items/:id',
        loadChildren: () => import('./list-items/list-items.module').then(m => m.ListItemsPageModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingListsPageRoutingModule { }
