import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should login successfully with correct credentials', () => {
    component.username = 'admin';
    component.password = 'admin123';
    spyOn(window, 'alert');
    component.onLogin();
    expect(window.alert).toHaveBeenCalledWith('Login successful!');
  });

  it('should show error on wrong credentials', () => {
    component.username = 'wrong';
    component.password = 'test';
    spyOn(window, 'alert');
    component.onLogin();
    expect(window.alert).toHaveBeenCalledWith('Invalid credentials');
  });
});
