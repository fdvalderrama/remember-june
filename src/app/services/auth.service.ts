import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _isLogged = signal(false);
  readonly isLogged = this._isLogged.asReadonly();

  constructor(private router: Router) {}

  login(email: string, password: string) {
    this._isLogged.set(true);
    this.router.navigate(['']);
  }

  logout() {
    this._isLogged.set(false);
  }
}
