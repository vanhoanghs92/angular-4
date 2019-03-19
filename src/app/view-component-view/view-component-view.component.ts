import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-component-view',
  templateUrl: './view-component-view.component.html',
  styleUrls: ['./view-component-view.component.css']
})
export class ViewComponentViewComponent implements OnInit {

  public name : string = '';
  public gender : number = 0;

  constructor() { }

  ngOnInit() {
  }

}
