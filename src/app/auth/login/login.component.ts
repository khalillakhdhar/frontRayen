import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRequest } from '../../shared/interfaces/auth-request';
import { AuthService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest = {} as AuthRequest;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.authRequest).subscribe(
      (token: string) => {
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        this.errorMessage = 'Email ou mot de passe incorrect.';
        console.error('Error during login', error);
      }
    );
  }
}
