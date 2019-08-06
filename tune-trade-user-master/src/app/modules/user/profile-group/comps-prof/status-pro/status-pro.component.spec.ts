import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusProComponent } from './status-pro.component';

describe('StatusProComponent', () => {
  let component: StatusProComponent;
  let fixture: ComponentFixture<StatusProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
