import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { authGuard } from './guards/auth.guard';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: 'product', component: ProductsComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
];
