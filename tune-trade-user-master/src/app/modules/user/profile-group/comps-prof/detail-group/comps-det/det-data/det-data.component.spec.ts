import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetDataComponent } from './det-data.component';

describe('DetDataComponent', () => {
  let component: DetDataComponent;
  let fixture: ComponentFixture<DetDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
