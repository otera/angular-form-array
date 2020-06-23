import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInputFormComponent } from './check-input-form.component';

describe('CheckInputFormComponent', () => {
  let component: CheckInputFormComponent;
  let fixture: ComponentFixture<CheckInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
