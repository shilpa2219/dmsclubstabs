import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositePage } from './deposite.page';

const routes: Routes = [
  {
    path: '',
    component: DepositePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositePageRoutingModule {}
