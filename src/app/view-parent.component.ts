import { Component, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-view-parent',
//   template: `<button (click) = "child.value = child.value+1">Add for child</button>
//             <app-view-child #child></app-view-child>`
// })
import { ViewChildComponent } from './view-child.component';


@Component({
  selector: 'app-view-parent',
  template: `<button (click) = "onAddForChild();">Add for child</button>
            <app-view-child #child></app-view-child>`
})

export class ViewParentComponent {
  @ViewChild(ViewChildComponent)
  mychild: ViewChildComponent;

 onAddForChild() {
   this.mychild.value++;
 }
}
