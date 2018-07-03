import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/observable/of';

@Injectable()
export class ConfigService {

  private url: string;
  private isRetrieved = false;
  private configuration: any;

  constructor(private http: HttpClient) { }

  /**
   * (异步)
   * 通过配置键值名称(单个或者数组)获取config.json中的配置数据
   * @param {string | Array<string>} key config.json中的属性名称
   */
  public get(key: string | Array<string>): Observable<any> {
    return Observable.create((observer: Observer<string>) => {
      const onComplete = (config) => {
        const value = this.readConfig(config, key);
        observer.next(value);
        observer.complete();
      };

      const onError = (error: any) => {
        observer.error(error);
      };

      this.load().subscribe(onComplete, onError);
    });
  }

  /**
   * (同步)
   * 通过配置键值名称(单个或者数组)获取config.json中的配置数据
   * @param {string | Array<string>} key config.json中的属性名称
   */
  public instant(key: string | Array<string>): string | any {
    return this.readConfig(this.configuration, key);
  }

  /**
   * 获取配置
   * @param url
   */
  public load(url?: string) {
    if (url) {
      this.url = url;
    }
    if (this.checkConfig()) {
      return this.retrieveConfig();
    } else {
      return Observable.of(this.configuration);
    }
  }

  /**
   * 获取配置
   */
  private retrieveConfig(): Observable<any> {
    return this.http.get(this.url)
      .do(res => {
        this.configuration = res;
        this.isRetrieved = true;
      })
      .share();
  }

  /**
   * 检查配置
   */
  private checkConfig(): boolean {
    return typeof this.configuration === 'undefined' && !this.isRetrieved;
  }

  /**
   * 配置对象中读取配置值
   * @param configuration 配置对象
   * @param key 配置键
   */
  private readConfig(configuration: Object, key: string | Array<string>): string | any {
    let result;

    if (configuration && key instanceof Array) {
      result = {};
      for (const k of key) {
        result[k] = this.readConfig(configuration, k);
      }
    }

    if (configuration && typeof key === 'string') {
      result = configuration[key];
    }

    if (typeof result === 'undefined') {
      result = '';
    }

    return result;
  }
}
