import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'list-items/:id',
    loadChildren: () => import('./pages/list-items/list-items.module').then(m => m.ListItemsPageModule)
  },
  {
    path: 'add-item/:id',
    loadChildren: () => import('./pages/add-item/add-item.module').then( m => m.AddItemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule { }
