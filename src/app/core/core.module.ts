import { NgModule, Optional, SkipSelf, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { CommonModule } from '../common/common.module';
import { GlobalErrorHandler } from './services/error-handle';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { RoleGuard } from './services/role-guard.service';
import { ConfigService } from './services/config.service';
import { IpcRendererService } from './services/ipc-renderer.service';
import { EevntType } from './services/event-type.service';
import { StartUpService } from './services/startup.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

export function StartUpServiceFactory(startUp: StartUpService) {
  return () => startUp.load('./assets/config.json')
    .catch(error => console.error(error.message));
}

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    AuthService,
    AuthGuard,
    RoleGuard,
    ConfigService,
    EevntType,
    IpcRendererService,
    StartUpService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartUpServiceFactory,
      deps: [StartUpService],
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    translate: TranslateService,
    config: ConfigService
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded, Import it in the AppModule only');
    }
  }
}
