import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  authService = inject(AuthService);
  email = '';
  password = '';

  login() {
    this.authService.login(this.email, this.password);
  }
}
