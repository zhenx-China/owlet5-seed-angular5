import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from 'app/core/services';
import { IpcRendererService } from 'app/core/services';
import { EevntType } from 'app/core/services';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  loginButtonText: string;
  changeButtonText: string;

  private subscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService,
    private ipcRenderer: IpcRendererService,
    private eventType: EevntType
  ) {
  }

  ngOnInit() {
    this.subscription = this.translate.stream(['login', 'changeLanguage']).subscribe(res => {
      const { login, changeLanguage } = res;
      this.loginButtonText = login;
      this.changeButtonText = changeLanguage;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  login() {
    this.loginButtonText = this.translate.instant('loading');
    this.authService.login().subscribe(() => {
      this.loginButtonText = this.translate.instant('login');
      if (this.authService.isLoggedIn) {
        this.ipcRenderer.send(this.eventType.LOGIN_SUCCESS);
        const redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '';
        this.router.navigate([redirectUrl]);
      }
    });
  }

  changeLang() {
    const currentLang = this.translate.currentLang;
    const lang = currentLang === 'zh-CN' ? 'en-US' : 'zh-CN';
    this.translate.use(lang);
  }
}
