import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCreatetokenComponent } from './main-createtoken.component';

describe('MainCreatetokenComponent', () => {
  let component: MainCreatetokenComponent;
  let fixture: ComponentFixture<MainCreatetokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCreatetokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCreatetokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
