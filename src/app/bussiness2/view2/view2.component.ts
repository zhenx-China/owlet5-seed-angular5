import { Component } from '@angular/core';

import { OperatorService } from '../../common/operatpr.service';

@Component({
  templateUrl: './view2.component.html',
  styleUrls: [
    './view2.component.scss'
  ]
})
export class View2Component {
  text = 'hello world!';

  size = 14;

  loading = false;

  buttonText = 'Click Me';

  person = {
    name: 'beckham',
    age: '42'
  };
  // person: any;

  constructor(
    private operator: OperatorService
  ) {
    const test = this.operator.get('test');
    console.log(test);
  }

  handleClick() {
    this.loading = true;
    this.buttonText = 'loading...';
    setTimeout(() => {
      alert('hello world');
      this.loading = false;
      this.buttonText = 'Click Me';
    }, 3000);
  }
}
