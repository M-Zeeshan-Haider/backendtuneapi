import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VfyProComponent } from './vfy-pro.component';

describe('VfyProComponent', () => {
  let component: VfyProComponent;
  let fixture: ComponentFixture<VfyProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VfyProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VfyProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
