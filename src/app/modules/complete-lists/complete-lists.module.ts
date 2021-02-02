import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteListsPageRoutingModule } from './complete-lists-routing.module';

import { CompleteListsPage } from './complete-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteListsPageRoutingModule
  ],
  declarations: [CompleteListsPage]
})
export class CompleteListsPageModule {}
