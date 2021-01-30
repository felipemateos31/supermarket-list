import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListItemsPageRoutingModule } from './list-items-routing.module';

import { ListItemsPage } from './list-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ListItemsPageRoutingModule
  ],
  declarations: [ListItemsPage]
})
export class ListItemsPageModule {}
