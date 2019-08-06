import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransCalcComponent } from './trans-calc.component';

describe('TransCalcComponent', () => {
  let component: TransCalcComponent;
  let fixture: ComponentFixture<TransCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
