import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
  store = {};

  get(key: string): any {
    return this.store[key];
  }

  set(key: string, value: any): void {
    this.store[key] = value;
  }
}
