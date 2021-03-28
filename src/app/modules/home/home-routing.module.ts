import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanLoad } from '@angular/router';
import { AuthGuard } from 'src/app/core/helpers/auth.guard';

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
        loadChildren: () => import('./../pending-lists/pending-lists.module').then(m => m.PendingListsPageModule),
        canLoad: [AuthGuard], canActivate: [AuthGuard]
      },
      {
        path: 'complete-lists',
        loadChildren: () => import('./../complete-lists/complete-lists.module').then(m => m.CompleteListsPageModule),
        canLoad: [AuthGuard], canActivate: [AuthGuard]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }