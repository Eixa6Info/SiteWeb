import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderNavButtonComponent} from './header-nav-button.component';

describe('HeaderNavButtonComponent', () => {
  let component: HeaderNavButtonComponent;
  let fixture: ComponentFixture<HeaderNavButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNavButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
