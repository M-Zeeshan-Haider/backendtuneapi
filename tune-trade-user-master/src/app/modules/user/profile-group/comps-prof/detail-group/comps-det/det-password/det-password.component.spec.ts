import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetPasswordComponent } from './det-password.component';

describe('DetPasswordComponent', () => {
  let component: DetPasswordComponent;
  let fixture: ComponentFixture<DetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
