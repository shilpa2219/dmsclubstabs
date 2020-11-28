import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositePageRoutingModule } from './deposite-routing.module';

import { DepositePage } from './deposite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositePageRoutingModule
  ],
  declarations: [DepositePage]
})
export class DepositePageModule {}
