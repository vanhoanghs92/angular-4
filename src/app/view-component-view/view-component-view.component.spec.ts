import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponentViewComponent } from './view-component-view.component';

describe('ViewComponentViewComponent', () => {
  let component: ViewComponentViewComponent;
  let fixture: ComponentFixture<ViewComponentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewComponentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
