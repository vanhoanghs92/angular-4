import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<h3>{{value}}</h3>
            <app-child (myClick) = "ChangeValue($event)"></app-child>`
})

export class ParentComponent {
  value = 0;

  ChangeValue(isAdd: boolean) {
    if (isAdd) {
      this.value = this.value + 1;
    } else {
      this.value = this.value - 1;
    }
  }
}
