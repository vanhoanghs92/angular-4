import { Component, OnInit } from '@angular/core';
import { allowSanitizationBypass } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  public isShow = true;
  public name = 'Alan';
  public isCheck;

  constructor() { }

  ngOnInit() {
  }

  onToogle(e) {
    if(this.isShow) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }

  onChange(value) {
        this.isCheck = value;
  }
}
