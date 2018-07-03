import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { StoreService } from '../../common/store.service';
import { View1Service, Manufacturer } from './view1.service';

@Component({
  templateUrl: './view1.component.html',
  styleUrls: [
    './view1.component.scss'
  ],
  providers: [
    View1Service
  ]
})
export class View1Component implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(
    private view1Service: View1Service,
    private store: StoreService
  ) {
    const test = this.store.get('test');
    console.log(test);
  }

  ngOnInit() {
    this.view1Service.getById('1')
      .takeUntil(this.ngUnsubscribe)
      .subscribe(res => {
        console.log(res);
      });

    this.view1Service.getAll()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(res => {
        console.log(res.getEntities());
      });

    this.view1Service.test()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(n => console.log(n));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}
