import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ConfigService } from './config.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class StartUpService {
  constructor(
    private config: ConfigService,
    private translate: TranslateService
  ) { }

  /**
   * 应用启动前，读取配置文件并设置相关服务
   * @param url 配置文件路径
   */
  public load(url?: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.config.load(url)
        .subscribe(res => {
          const lang = this.config.instant('lang');
          this.translate.use(lang);
          resolve();
        }, (err: HttpErrorResponse) => {
          reject(err);
        });
    });
  }
}
