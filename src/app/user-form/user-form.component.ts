import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  isHightLight = false;
  currentStyle = {color: 'blue', fontSize: '50px', fontFamily: 'tomaho'};
  evenStyle = {color: 'blue', fontSize: '50px', fontFamily: 'tomaho'};
  oddStyle = {color: 'red', fontSize: '20px'};
  currentClass = {circle: !this.isHightLight, square: this.isHightLight};
  constructor() { }

  ngOnInit() {
  }
}
