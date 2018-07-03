import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './view3.component.html',
  styleUrls: [
    './view3.component.scss'
  ]
})
export class View3Component implements OnInit, OnDestroy {

  ws: WebSocketSubject<string>;

  ngOnInit() {
    this.ws = WebSocketSubject.create('ws://localhost:9876');
    this.ws
      .do(res => {
        console.log(res);
      })
      .subscribe(res => {
        console.log(res);
      }, error => {
        console.log(error);
      }, () => {
        console.log('web socket closed');
      });
  }

  ngOnDestroy() {
    this.ws.unsubscribe();
  }
}
