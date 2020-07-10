import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFquestionComponent } from './tfquestion.component';

describe('TFquestionComponent', () => {
  let component: TFquestionComponent;
  let fixture: ComponentFixture<TFquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
