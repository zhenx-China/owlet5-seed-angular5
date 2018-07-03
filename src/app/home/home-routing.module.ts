import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from 'app/core/services';
import { RoleGuard } from 'app/core/services';

const loginRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivateChild: [AuthGuard, RoleGuard],
    children: [
      {
        path: 'bussiness1',
        loadChildren: 'app/bussiness1/bussiness1.module#Bussiness1Module'
        // canLoad: [AuthGuard]
      },
      {
        path: 'bussiness2',
        loadChildren: 'app/bussiness2/bussiness2.module#Bussiness2Module'
        // canLoad: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
