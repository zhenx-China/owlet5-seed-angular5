import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { View1Component } from './view1/view1.component';

const bussiness1Routes: Routes = [
  {
    path: 'view1',
    component: View1Component
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'view1'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(bussiness1Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Bussiness1RoutingModule { }
