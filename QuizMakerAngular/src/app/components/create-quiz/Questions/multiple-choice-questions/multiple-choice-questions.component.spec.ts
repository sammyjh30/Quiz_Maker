import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceQuestionsComponent } from './multiple-choice-questions.component';

describe('MultipleChoiceQuestionsComponent', () => {
  let component: MultipleChoiceQuestionsComponent;
  let fixture: ComponentFixture<MultipleChoiceQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiceQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
