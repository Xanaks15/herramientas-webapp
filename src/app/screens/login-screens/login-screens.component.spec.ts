import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScreensComponent } from './login-screens.component';

describe('LoginScreensComponent', () => {
  let component: LoginScreensComponent;
  let fixture: ComponentFixture<LoginScreensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginScreensComponent]
    });
    fixture = TestBed.createComponent(LoginScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
