import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingListsPageRoutingModule } from './pending-lists-routing.module';

import { PendingListsPage } from './pending-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingListsPageRoutingModule
  ],
  declarations: [PendingListsPage]
})
export class PendingListsPageModule {}
