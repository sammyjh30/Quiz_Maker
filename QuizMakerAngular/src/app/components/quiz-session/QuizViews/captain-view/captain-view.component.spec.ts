import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptainViewComponent } from './captain-view.component';

describe('CaptainViewComponent', () => {
  let component: CaptainViewComponent;
  let fixture: ComponentFixture<CaptainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
