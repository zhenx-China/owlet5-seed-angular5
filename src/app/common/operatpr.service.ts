import { Injectable } from '@angular/core';

import { StoreService } from './store.service';

@Injectable()
export class OperatorService {
  constructor(
    private storeService: StoreService
  ) { }

  get(key: string): any {
    return this.storeService.get(key);
  }

  set(key: string, value: any): void {
    this.storeService.set(key, value);
  }
}
