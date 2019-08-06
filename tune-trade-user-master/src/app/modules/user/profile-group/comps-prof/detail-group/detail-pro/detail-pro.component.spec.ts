import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProComponent } from './detail-pro.component';

describe('DetailProComponent', () => {
  let component: DetailProComponent;
  let fixture: ComponentFixture<DetailProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
