import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCMainComponent } from './kyc-main.component';

describe('KYCMainComponent', () => {
  let component: KYCMainComponent;
  let fixture: ComponentFixture<KYCMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KYCMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KYCMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
