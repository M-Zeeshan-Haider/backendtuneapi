import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralProComponent } from './referral-pro.component';

describe('ReferralProComponent', () => {
  let component: ReferralProComponent;
  let fixture: ComponentFixture<ReferralProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
