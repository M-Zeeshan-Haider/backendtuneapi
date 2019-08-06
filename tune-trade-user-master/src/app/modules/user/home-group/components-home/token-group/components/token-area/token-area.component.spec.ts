import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenAreaComponent } from './token-area.component';

describe('TokenAreaComponent', () => {
  let component: TokenAreaComponent;
  let fixture: ComponentFixture<TokenAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
