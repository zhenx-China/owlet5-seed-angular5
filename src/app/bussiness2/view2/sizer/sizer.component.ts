import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  template: `
    <div>
      <label [style.font-size.px]="size">FontSize: {{ size }}</label>
      <button (click)="inc()">+</button>
      <button (click)="dec()">-</button>
    </div>
  `
})
export class SizerComponent {
  @Input() size: number;

  @Output() sizeChange = new EventEmitter<number>();

  inc() {
    this.size += 1;
    this.sizeChange.emit(this.size);
  }

  dec() {
    this.size -= 1;
    this.sizeChange.emit(this.size);
  }
}
