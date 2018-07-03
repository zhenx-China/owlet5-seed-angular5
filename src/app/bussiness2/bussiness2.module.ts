import { NgModule } from '@angular/core';

import { ShareModule } from '../share';
import { CommonModule } from '../common/common.module';
import { Bussiness2RoutingModule } from './bussiness2-routing.module';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { SizerComponent } from './view2/sizer/sizer.component';

@NgModule({
  imports: [
    ShareModule,
    CommonModule.forChild(),
    Bussiness2RoutingModule
  ],
  declarations: [
    View2Component,
    View3Component,
    SizerComponent
  ]
})
export class Bussiness2Module { }
