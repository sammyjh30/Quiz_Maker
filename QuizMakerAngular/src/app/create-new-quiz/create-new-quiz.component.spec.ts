import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewQuizComponent } from './create-new-quiz.component';

describe('CreateNewQuizComponent', () => {
  let component: CreateNewQuizComponent;
  let fixture: ComponentFixture<CreateNewQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
