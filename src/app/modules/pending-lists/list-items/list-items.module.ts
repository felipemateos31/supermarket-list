import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListItemsPageRoutingModule } from './list-items-routing.module';

import { ListItemsPage } from './list-items.page';
import { AddItemPageModule } from '../add-item/add-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ListItemsPageRoutingModule,
    AddItemPageModule,
  ],
  declarations: [ListItemsPage]
})
export class ListItemsPageModule {}
