import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAddTeamComponent } from './quiz-add-team.component';

describe('QuizAddTeamComponent', () => {
  let component: QuizAddTeamComponent;
  let fixture: ComponentFixture<QuizAddTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAddTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAddTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
