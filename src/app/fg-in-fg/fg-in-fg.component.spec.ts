import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgInFgComponent } from './fg-in-fg.component';

describe('FgInFgComponent', () => {
  let component: FgInFgComponent;
  let fixture: ComponentFixture<FgInFgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgInFgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgInFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
