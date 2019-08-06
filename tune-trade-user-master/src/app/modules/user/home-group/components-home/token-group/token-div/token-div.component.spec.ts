import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenDivComponent } from './token-div.component';

describe('TokenDivComponent', () => {
  let component: TokenDivComponent;
  let fixture: ComponentFixture<TokenDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
