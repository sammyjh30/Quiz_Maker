import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamJoinComponent } from './team-join.component';

describe('TeamJoinComponent', () => {
  let component: TeamJoinComponent;
  let fixture: ComponentFixture<TeamJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
