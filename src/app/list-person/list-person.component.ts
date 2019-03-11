import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  arrPeople = [
    {name: 'hoang', age: 18},
    {name: 'Alan', age: 27}
  ];

  constructor() { }

  ngOnInit() {
  }

}
