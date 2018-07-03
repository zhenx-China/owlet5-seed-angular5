import { NgModule } from '@angular/core';

import { ShareModule } from '../share';
import { CommonModule } from '../common/common.module';
import { Bussiness1RoutingModule } from './bussiness1-routing.module';
import { View1Component } from './view1/view1.component';

@NgModule({
  imports: [
    ShareModule,
    CommonModule.forChild(),
    Bussiness1RoutingModule
  ],
  declarations: [
    View1Component
  ]
})
export class Bussiness1Module { }
