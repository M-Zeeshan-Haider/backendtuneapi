import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransDivComponent } from './trans-div.component';

describe('TransDivComponent', () => {
  let component: TransDivComponent;
  let fixture: ComponentFixture<TransDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
