import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaFormsComponent } from './idea-forms.component';

describe('IdeaFormsComponent', () => {
  let component: IdeaFormsComponent;
  let fixture: ComponentFixture<IdeaFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
