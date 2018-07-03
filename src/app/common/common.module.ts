import { NgModule, ModuleWithProviders } from '@angular/core';

import { TestComponent } from './test.component';
import { StoreService } from './store.service';
import { OperatorService } from './operatpr.service';

@NgModule({
  declarations: [
    TestComponent
  ],
  exports: [
    TestComponent
  ]
})
export class CommonModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommonModule,
      providers: [
        StoreService
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: CommonModule,
      providers: [
        OperatorService
      ]
    };
  }
}
