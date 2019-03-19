import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-binding',
  templateUrl: './even-binding.component.html',
  styleUrls: ['./even-binding.component.css']
})
export class EvenBindingComponent implements OnInit {

  public title = 'Even Binding';
  public count = 0;
  public username = '';
  public name = '';

  constructor() { }

  ngOnInit() {
  }

  onClickMe(e) {
    alert(e.target.innerText);
  }

  onKeyUp(e) {
    this.username = e.target.value;
  }

  onKeyUpEnter(e) {
    this.name = e.target.value;
  }
}
