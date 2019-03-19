import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public name = 'alanTran';
  birthday = new Date(2015, 7, 25);
  person = { name: 'Alan', age: 30};
  address = Promise.resolve('Le Thanh Nghi, Ha Noi');
  altLink = 'anh girl xinh';
  width = 800;
  isBorder = true;
  isCheck = 1;
  isSpecial = true;
  size = 30;

  public user = {
    name : 'nghiepuit',
    age : 22,
    isMarried : false
  };

  constructor() { }

  ngOnInit() {
  }

  showInfo() {
    return `name : ${this.user.name}`;
  }

}
