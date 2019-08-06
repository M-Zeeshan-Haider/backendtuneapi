import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetSettingsComponent } from './det-settings.component';

describe('DetSettingsComponent', () => {
  let component: DetSettingsComponent;
  let fixture: ComponentFixture<DetSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
