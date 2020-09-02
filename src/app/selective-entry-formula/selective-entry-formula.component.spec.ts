import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectiveEntryFormulaComponent } from './selective-entry-formula.component';

describe('SelectiveEntryFormulaComponent', () => {
  let component: SelectiveEntryFormulaComponent;
  let fixture: ComponentFixture<SelectiveEntryFormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectiveEntryFormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectiveEntryFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
