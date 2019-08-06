import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdVfyProComponent } from './id-vfy-pro.component';

describe('IdVfyProComponent', () => {
  let component: IdVfyProComponent;
  let fixture: ComponentFixture<IdVfyProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdVfyProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdVfyProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
