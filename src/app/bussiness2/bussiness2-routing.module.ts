import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';

const bussiness2Routes: Routes = [
  {
    path: 'view2',
    component: View2Component
  },
  {
    path: 'view3',
    component: View3Component
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'view2'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(bussiness2Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Bussiness2RoutingModule { }
